import { atom } from "jotai";

interface User {
  id: number;
  name: string;
  email: string;
}

export const userIdAtom = atom(1);

export const userAtom = atom(async (get) => {
  const userId = get(userIdAtom);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user: User = await response.json();
  return user;
});
