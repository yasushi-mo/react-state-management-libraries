import { useCounterStore } from "../stores/counterStore";

export function CounterUnpacking() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div>
      <h1>カウント: {count}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>リセット</button>
    </div>
  );
}
