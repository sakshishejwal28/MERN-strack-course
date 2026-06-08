// pages/hooks/use-ref.tsx
import type { NextPage } from "next";
import Head from "next/head";
import {
  useRef,
  useState,
  useEffect,
  type MutableRefObject,
  type RefObject,
} from "react";
import type { Lap } from "../.next/types";
import styles from "../../styles/UseRef.module.css";

// ── Utility ───────────────────────────────────────────────────
function formatTime(ms: number): string {
  const m  = String(Math.floor(ms / 60000)).padStart(2, "0");
  const s  = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
  const cs = String(Math.floor((ms % 1000) / 10)).padStart(2, "0");
  return `${m}:${s}.${cs}`;
}

// ── Page component ────────────────────────────────────────────
const UseRefPage: NextPage = () => {
  const [time, setTime]       = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const [laps, setLaps]       = useState<Lap[]>([]);

  // MutableRefObject<T> — value changes without re-render
  const intervalRef: MutableRefObject<ReturnType<typeof setInterval> | null> =
    useRef<ReturnType<typeof setInterval> | null>(null);

  // RefObject<T> — typed DOM reference
  const focusInputRef: RefObject<HTMLInputElement | null> =
    useRef<HTMLInputElement | null>(null);
  const lapListRef: RefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement | null>(null);
  const noteRef: RefObject<HTMLTextAreaElement | null> =
    useRef<HTMLTextAreaElement | null>(null);

  // Auto-focus input on mount
  useEffect(() => {
    focusInputRef.current?.focus();
  }, []);

  // Scroll to latest lap
  useEffect(() => {
    if (lapListRef.current) {
      lapListRef.current.scrollTop = lapListRef.current.scrollHeight;
    }
  }, [laps]);

  const start = (): void => {
    if (running) return;
    setRunning(true);
    intervalRef.current = setInterval(
      () => setTime((t) => t + 10),
      10
    );
  };

  const stop = (): void => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setRunning(false);
  };

  const reset = (): void => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setRunning(false);
    setTime(0);
    setLaps([]);
  };

  const addLap = (): void => {
    setLaps((prev) => {
      const lastTime = prev.length > 0 ? prev[prev.length - 1].time : 0;
      return [...prev, { time, delta: prev.length > 0 ? time - lastTime : null }];
    });
  };

  const copyNotes = (): void => {
    // Direct DOM manipulation via ref — no state needed
    if (noteRef.current) {
      noteRef.current.select();
      document.execCommand("copy");
    }
  };

  return (
    <>
      <Head>
        <title>useRef — Stopwatch</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <span className={styles.hookLabel}>useRef</span>
          <h1 className={styles.title}>Stopwatch</h1>
        </header>

        {/* DOM ref — focus */}
        <div className={styles.refRow}>
          <span className={styles.refTag}>RefObject&lt;HTMLInputElement&gt;</span>
          <div className={styles.focusRow}>
            <input
              ref={focusInputRef}
              className={styles.focusInput}
              placeholder="Auto-focused via ref on mount"
              readOnly
            />
            <button
              className={styles.focusBtn}
              onClick={() => focusInputRef.current?.focus()}
            >
              focus()
            </button>
          </div>
        </div>

        {/* Clock */}
        <div className={styles.clock}>{formatTime(time)}</div>

        {/* Controls */}
        <div className={styles.controls}>
          <button
            className={`${styles.btn} ${running ? styles.stop : styles.start}`}
            onClick={running ? stop : start}
          >
            {running ? "⏸ Stop" : "▶ Start"}
          </button>
          <button
            className={`${styles.btn} ${styles.lap}`}
            onClick={addLap}
            disabled={!running}
          >
            🏁 Lap
          </button>
          <button
            className={`${styles.btn} ${styles.reset}`}
            onClick={reset}
          >
            ↺ Reset
          </button>
        </div>

        {/* Laps — scrollable div via ref */}
        {laps.length > 0 && (
          <>
            <div className={styles.refTag} style={{ marginBottom: 8 }}>
              RefObject&lt;HTMLDivElement&gt; — imperative scrollTop
            </div>
            <div className={styles.lapBox} ref={lapListRef}>
              {laps.map((lap, i) => (
                <div key={i} className={styles.lapRow}>
                  <span className={styles.lapIdx}>Lap {i + 1}</span>
                  <span className={styles.lapTime}>{formatTime(lap.time)}</span>
                  {lap.delta !== null && (
                    <span className={lap.delta >= 0 ? styles.slower : styles.faster}>
                      {lap.delta >= 0 ? "+" : ""}
                      {formatTime(Math.abs(lap.delta))}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {/* Textarea ref — select & copy */}
        <div className={styles.refRow} style={{ marginTop: 20 }}>
          <span className={styles.refTag}>RefObject&lt;HTMLTextAreaElement&gt;</span>
          <div className={styles.noteRow}>
            <textarea
              ref={noteRef}
              className={styles.note}
              defaultValue="Refs give direct DOM access without state."
              rows={2}
            />
            <button className={styles.focusBtn} onClick={copyNotes}>
              select()
            </button>
          </div>
        </div>

        {/* Code */}
        <div className={styles.codeBox}>
          <p className={styles.codeTitle}>Typed ref patterns</p>
          <pre className={styles.pre}>{`// MutableRefObject — persists across renders, no re-render
const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
intervalRef.current = setInterval(...)
clearInterval(intervalRef.current!)

// RefObject — typed DOM element
const inputRef = useRef<HTMLInputElement | null>(null)
inputRef.current?.focus()          // optional chaining is safe

// Imperative DOM mutation
const listRef = useRef<HTMLDivElement | null>(null)
listRef.current!.scrollTop = listRef.current!.scrollHeight`}</pre>
        </div>
      </main>
    </>
  );
};

export default UseRefPage;