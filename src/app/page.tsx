import { WeatherDataPanel } from "./components/weather-data-panel";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <WeatherDataPanel />
    </main>
  );
}
