import { useAtomValue } from "jotai";
import { counterAtom, doubledAtom, isEvenAtom } from "../atoms/counterAtom";

export function DerivedDisplay() {
  const count = useAtomValue(counterAtom);
  const doubled = useAtomValue(doubledAtom);
  const isEven = useAtomValue(isEvenAtom);

  return (
    <div>
      <p>カウント: {count}</p>
      <p>2倍: {doubled}</p>
      <p>{isEven ? "偶数です" : "奇数です"}</p>
    </div>
  );
}
