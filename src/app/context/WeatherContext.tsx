'use client';
import React, { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

type LocationData = {
  lat: number | null;
  lon: number | null;
  city?: string;
};

type WeatherContextType = {
  locationData: LocationData;
  setLocationData: Dispatch<SetStateAction<LocationData>>;
};

const WeatherContext = createContext<WeatherContextType>({
  locationData: { lat: null, lon: null },
  setLocationData: () => {}
});

export const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const [locationData, setLocationData] = useState<LocationData>({ lat: null, lon: null });

  return (
    <WeatherContext.Provider value={{ locationData, setLocationData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  return useContext(WeatherContext);
};