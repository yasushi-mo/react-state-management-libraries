import { useSetAtom } from "jotai";
import { counterAtom } from "../atoms/counterAtom";

export function IncrementButton() {
  const setCount = useSetAtom(counterAtom);

  console.log("🟢 IncrementButton が再レンダリングされました");

  return <button onClick={() => setCount((c) => c + 1)}>インクリメント</button>;
}
