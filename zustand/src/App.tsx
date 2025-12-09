import { useCounterStore } from "./stores/counterStore";

function App() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  return (
    <div>
      <h1>カウント: {count}</h1>
      <button onClick={increment}>増やす</button>
      <button onClick={decrement}>減らす</button>
      <button onClick={reset}>リセット</button>
    </div>
  );
}

export default App;
