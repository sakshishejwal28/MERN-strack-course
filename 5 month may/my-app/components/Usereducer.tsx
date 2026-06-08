// pages/hooks/use-reducer.tsx
import type { NextPage } from "next";
import Head from "next/head";
import { useReducer, useState } from "react";
import type { Task, CartState, TaskAction, FilterType } from "../.next/types";
import styles from "../../styles/UseReducer.module.css";

// ── Pure reducer — all logic in one place ─────────────────────
function taskReducer(state: CartState, action: TaskAction): CartState {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Date.now(), text: action.text, done: false, priority: action.priority },
        ],
      };
    case "TOGGLE":
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.id ? { ...t, done: !t.done } : t
        ),
      };
    case "DELETE":
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.id),
      };
    case "CLEAR_DONE":
      return { ...state, tasks: state.tasks.filter((t) => !t.done) };
    case "SET_FILTER":
      return { ...state, filter: action.filter };
    default:
      return state;
  }
}

const initialState: CartState = { tasks: [], filter: "all" };

const PRIORITY_COLORS: Record<Task["priority"], string> = {
  low: "#22c55e",
  medium: "#f59e0b",
  high: "#ef4444",
};

const FILTERS: FilterType[] = ["all", "active", "done"];

// ── Page component ────────────────────────────────────────────
const UseReducerPage: NextPage = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [input, setInput] = useState<string>("");
  const [priority, setPriority] = useState<Task["priority"]>("medium");

  const handleAdd = (): void => {
    const text = input.trim();
    if (!text) return;
    dispatch({ type: "ADD", text, priority });
    setInput("");
  };

  const visible: Task[] = state.tasks.filter((t) => {
    if (state.filter === "active") return !t.done;
    if (state.filter === "done") return t.done;
    return true;
  });

  const doneCount = state.tasks.filter((t) => t.done).length;

  return (
    <>
      <Head>
        <title>useReducer — Task Manager</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <span className={styles.hookLabel}>useReducer</span>
          <h1 className={styles.title}>Task Manager</h1>
          <p className={styles.meta}>
            {state.tasks.length} tasks &middot; {doneCount} done
          </p>
        </header>

        {/* Input row */}
        <div className={styles.addRow}>
          <input
            className={styles.input}
            placeholder="New task…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          />
          <select
            className={styles.select}
            value={priority}
            onChange={(e) => setPriority(e.target.value as Task["priority"])}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button className={styles.addBtn} onClick={handleAdd}>
            Add
          </button>
        </div>

        {/* Filters */}
        <div className={styles.filters}>
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`${styles.filterBtn} ${state.filter === f ? styles.activeFilter : ""}`}
              onClick={() => dispatch({ type: "SET_FILTER", filter: f })}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Task list */}
        <ul className={styles.list}>
          {visible.length === 0 && (
            <li className={styles.empty}>No tasks here.</li>
          )}
          {visible.map((task) => (
            <li
              key={task.id}
              className={`${styles.item} ${task.done ? styles.done : ""}`}
            >
              <span
                className={styles.dot}
                style={{ background: PRIORITY_COLORS[task.priority] }}
              />
              <button
                className={styles.check}
                onClick={() => dispatch({ type: "TOGGLE", id: task.id })}
                aria-label="toggle task"
              >
                {task.done ? "✓" : ""}
              </button>
              <span className={styles.taskText}>{task.text}</span>
              <span className={styles.priorityTag}>{task.priority}</span>
              <button
                className={styles.del}
                onClick={() => dispatch({ type: "DELETE", id: task.id })}
                aria-label="delete task"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        {doneCount > 0 && (
          <button
            className={styles.clearBtn}
            onClick={() => dispatch({ type: "CLEAR_DONE" })}
          >
            Clear {doneCount} completed
          </button>
        )}

        {/* Type-safe reducer anatomy */}
        <div className={styles.codeBox}>
          <p className={styles.codeTitle}>Typed reducer</p>
          <pre className={styles.pre}>{`// Discriminated union — exhaustive action types
type TaskAction =
  | { type: "ADD";    text: string; priority: Priority }
  | { type: "TOGGLE"; id: number }
  | { type: "DELETE"; id: number }
  | { type: "CLEAR_DONE" }
  | { type: "SET_FILTER"; filter: FilterType }

function taskReducer(
  state: CartState,
  action: TaskAction   // TypeScript narrows per case
): CartState { ... }

const [state, dispatch] = useReducer(taskReducer, initialState)
// dispatch({ type: "ADD", text: "Buy milk", priority: "high" })`}</pre>
        </div>
      </main>
    </>
  );
};

export default UseReducerPage;