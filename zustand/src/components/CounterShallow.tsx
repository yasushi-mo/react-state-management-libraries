import { useCounterStore } from "../stores/counterStore";
import { useShallow } from "zustand/react/shallow";

export function CounterShallow() {
  const { count, increment } = useCounterStore(
    useShallow((state) => ({
      count: state.count,
      increment: state.increment,
    }))
  );

  return (
    <div>
      <h1>カウント: {count}</h1>
      <button onClick={increment}>+1</button>
    </div>
  );
}
