"use client"
import Counter from "../components/Timer";
import Timer from "../components/counter";
import useCustom from "../components/usecustom";



export default function Home() {
  const { count, increment, decrement, reset } = useCustom(10);

  return (
    <div>
      <Counter />
      <Timer />
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>


    </div>

  );
}
