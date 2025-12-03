import { useAtom } from "jotai";
import { themeAtom, userSettingsAtom } from "../atoms/settingsAtom";

export function Settings() {
  const [theme, setTheme] = useAtom(themeAtom);
  const [settings, setSettings] = useAtom(userSettingsAtom);

  return (
    <div>
      <div>
        <label>テーマ: </label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as "light" | "dark")}
        >
          <option value="light">ライト</option>
          <option value="dark">ダーク</option>
        </select>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={settings.notifications}
            onChange={(e) =>
              setSettings({ ...settings, notifications: e.target.checked })
            }
          />
          通知を有効にする
        </label>
      </div>
    </div>
  );
}
