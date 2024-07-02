"use client";
import { useSearchParams } from "next/navigation";
import { useWeather } from "@/app/context/WeatherContext";
import { WeatherDataPanel } from "@/app/components/weather-data-panel";
import { useEffect } from "react";

export default function Page({ params }: { params: { city: string } }) {
  const searchParams = useSearchParams();
  const lat = searchParams?.get("lat");
  const lon = searchParams?.get("lon");
  const { setLocationData } = useWeather();

  useEffect(() => {
    if (lat !== null && lon !== null && params.city) {
      setLocationData({ lat: Number(lat), lon: Number(lon), city: decodeURIComponent(params.city) });
    }
  }, [lat, lon, params.city, setLocationData]);

  return <WeatherDataPanel />;
}