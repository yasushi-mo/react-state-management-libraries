import { Suspense } from "react";
import { useAtom, useAtomValue } from "jotai";
import { userIdAtom, userAtom } from "../atoms/userAtom";

function UserData() {
  const user = useAtomValue(userAtom);

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

export function UserProfile() {
  const [userId, setUserId] = useAtom(userIdAtom);

  return (
    <div>
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(Number(e.target.value))}
      />
      <Suspense fallback={<div>読み込み中...</div>}>
        <UserData />
      </Suspense>
    </div>
  );
}
