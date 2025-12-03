import { useAtom } from "jotai";
import { counterAtom } from "./atoms/counterAtom";
import { Display } from "./components/Display";
import { IncrementButton } from "./components/IncrementButton";

function App() {
  const [count, setCount] = useAtom(counterAtom);

  console.log("⚫ App が再レンダリングされました");

  return (
    <div>
      <h1>カウント: {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>増やす</button>
      <button onClick={() => setCount((c) => c - 1)}>減らす</button>
      <div>
        <Display />
        <IncrementButton />
      </div>
    </div>
  );
}

export default App;
