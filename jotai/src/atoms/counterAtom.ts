import { atom } from "jotai";

export const counterAtom = atom(0);

/** counterAtom の2倍の値を持つ派生 atom */
export const doubledAtom = atom((get) => get(counterAtom) * 2);

/** counterAtom が偶数かどうかを判定する派生 atom */
export const isEvenAtom = atom((get) => get(counterAtom) % 2 === 0);

// 書き込み専用の atom（第1引数に null を渡す慣習）
export const incrementAtom = atom(null, (get, set) => {
  set(counterAtom, get(counterAtom) + 1);
});

export const decrementAtom = atom(null, (get, set) => {
  set(counterAtom, get(counterAtom) - 1);
});

export const resetAtom = atom(null, (_, set) => {
  set(counterAtom, 0);
});
