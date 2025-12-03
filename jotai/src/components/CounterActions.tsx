import { useSetAtom, useAtomValue } from "jotai";
import {
  counterAtom,
  incrementAtom,
  decrementAtom,
  resetAtom,
} from "../atoms/counterAtom";

export function CounterActions() {
  const count = useAtomValue(counterAtom);
  const increment = useSetAtom(incrementAtom);
  const decrement = useSetAtom(decrementAtom);
  const reset = useSetAtom(resetAtom);

  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>リセット</button>
    </div>
  );
}
