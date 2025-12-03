import { atom } from "jotai";

/** 摂氏温度を保持する atom */
export const celsiusAtom = atom(0);

/** 華氏温度を計算し、設定もできる atom */
export const fahrenheitAtom = atom(
  (get) => (get(celsiusAtom) * 9) / 5 + 32,
  (_, set, newValue: number) => {
    set(celsiusAtom, ((newValue - 32) * 5) / 9);
  }
);
