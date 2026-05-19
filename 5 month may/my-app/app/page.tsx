 import React from "react";
import useCounter from "../components/example3";
import useCustomEffect from "../components/example2";

function App() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h1>Separate Hooks Example</h1>
      <h2>Count: {count}</h2>

      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}

export default App;