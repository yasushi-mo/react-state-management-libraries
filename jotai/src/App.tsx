import { useAtom } from "jotai";
import { counterAtom } from "./atoms/counterAtom";
import { Display } from "./components/Display";
import { IncrementButton } from "./components/IncrementButton";
import { DerivedDisplay } from "./components/DerivedDisplay";
import { Temperature } from "./components/Temperature";
import { CounterActions } from "./components/CounterActions";
import { UserProfile } from "./components/UserProfile";

function App() {
  const [count, setCount] = useAtom(counterAtom);

  console.log("⚫ App が再レンダリングされました");

  return (
    <div>
      {/* useAtom */}
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
      </div>
      <hr />

      {/* derived atoms */}
      <div>
        <DerivedDisplay />
        <Temperature />
        <CounterActions />
      </div>
      <hr />

      <UserProfile />
    </div>
  );
}

export default App;
