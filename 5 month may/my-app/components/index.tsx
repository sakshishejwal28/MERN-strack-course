// types/index.ts

// ── useReducer ────────────────────────────────────────────────
export interface Task {
  id: number;
  text: string;
  done: boolean;
  priority: "low" | "medium" | "high";
}

export type FilterType = "all" | "active" | "done";

export interface CartState {
  tasks: Task[];
  filter: FilterType;
}

export type TaskAction =
  | { type: "ADD"; text: string; priority: Task["priority"] }
  | { type: "TOGGLE"; id: number }
  | { type: "DELETE"; id: number }
  | { type: "CLEAR_DONE" }
  | { type: "SET_FILTER"; filter: FilterType };

// ── useRef ────────────────────────────────────────────────────
export interface Lap {
  time: number;
  delta: number | null;
}

// ── useCallback ───────────────────────────────────────────────
export interface TagItemProps {
  name: string;
  selected: boolean;
  renderCount: number;
  onToggle: (name: string) => void;
}