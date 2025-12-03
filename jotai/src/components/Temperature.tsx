import { useAtom } from "jotai";
import { celsiusAtom, fahrenheitAtom } from "../atoms/temperatureAtom";

export function Temperature() {
  const [celsius, setCelsius] = useAtom(celsiusAtom);
  const [fahrenheit, setFahrenheit] = useAtom(fahrenheitAtom);

  return (
    <div>
      <div>
        <label>摂氏: </label>
        <input
          type="number"
          value={celsius}
          onChange={(e) => setCelsius(Number(e.target.value))}
        />
      </div>
      <div>
        <label>華氏: </label>
        <input
          type="number"
          value={fahrenheit}
          onChange={(e) => setFahrenheit(Number(e.target.value))}
        />
      </div>
    </div>
  );
}
