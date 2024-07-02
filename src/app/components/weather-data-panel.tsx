import React from "react";
import { GeoLocationWrapper } from "@/app/components/geo-location-wrapper";
import { WeatherCityData } from "@/app/components/weather-city-data";
export const WeatherDataPanel: React.FC = () => {
  return (
    <div className="flex justify-center w-full h-full ">
      <GeoLocationWrapper />
      <WeatherCityData />
    </div>
  );
};
