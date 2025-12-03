import { useAtomValue } from "jotai";
import { counterAtom } from "../atoms/counterAtom";

export function Display() {
  const count = useAtomValue(counterAtom);
  console.log("🟠 Display が再レンダリングされました。現在の値:", count);

  return <div>現在の値: {count}</div>;
}
