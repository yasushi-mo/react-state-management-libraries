import { useAtom } from "jotai";
import { counterAtom } from "./atoms/counterAtom";

function App() {
  const [count, setCount] = useAtom(counterAtom);

  return (
    <div>
      <h1>カウント: {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>増やす</button>
      <button onClick={() => setCount((c) => c - 1)}>減らす</button>
    </div>
  );
}

export default App;
