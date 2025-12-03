import { atomWithStorage } from "jotai/utils";

export const themeAtom = atomWithStorage<"light" | "dark">("theme", "light");

export const userSettingsAtom = atomWithStorage("userSettings", {
  language: "ja",
  notifications: true,
});
