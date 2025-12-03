import { useAtom } from "jotai";
import { counterAtom } from "./atoms/counterAtom";
import { Display } from "./components/Display";
import { IncrementButton } from "./components/IncrementButton";
import { DerivedDisplay } from "./components/DerivedDisplay";
import { Temperature } from "./components/Temperature";
import { CounterActions } from "./components/CounterActions";

function App() {
  const [count, setCount] = useAtom(counterAtom);

  console.log("⚫ App が再レンダリングされました");

  return (
    <div>
      <div>
        <div>
          <h1>カウント: {count}</h1>
          <button onClick={() => setCount((c) => c + 1)}>増やす</button>
          <button onClick={() => setCount((c) => c - 1)}>減らす</button>
        </div>
        <hr />
        <div>
          <Display />
          <IncrementButton />
        </div>
        <hr />
        <div>
          <DerivedDisplay />
        </div>
      </div>

      <div>
        <Temperature />
        <CounterActions />
      </div>
    </div>
  );
}

export default App;
