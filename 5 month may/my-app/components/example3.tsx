import useCustomState from "./useCustomState";
import useCustomEffect from "./useCustomEffect";

const useCounter = () => {
  const [count, setCount] = useCustomState(0);

  useCustomEffect(() => {
    console.log("Count changed:", count);
  }, count);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return { count, increment, decrement };
};

export default useCounter;