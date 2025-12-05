import { useCounterStore } from "../stores/counterStore";

export function CounterSelector() {
  const { count, increment } = useCounterStore((state) => ({
    count: state.count,
    increment: state.increment,
  }));

  return (
    <div>
      <h1>カウント: {count}</h1>
      <button onClick={increment}>+1</button>
    </div>
  );
}
