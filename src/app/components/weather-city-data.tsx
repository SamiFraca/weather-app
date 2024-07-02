"use client";
import React, { useEffect } from "react";
import { useWeatherApi } from "@hooks/index";
import Image from "next/image";
import { CityDataList } from "@/app/components/weather-city-data-list";
import { useWeather } from "@/app/context/WeatherContext";
import { SkeletonWrapper } from "@/app/components/skeleton/skeleton-wrapper";

const userGeoLocation =
  typeof window !== "undefined"
    ? localStorage.getItem("userGeoLocation")
    : null;
const parsedGeoLocation =
  userGeoLocation && userGeoLocation !== "null"
    ? JSON.parse(userGeoLocation)
    : { latitude: 40.416775, longitude: -3.70379 };

export const WeatherCityData: React.FC = () => {
  const { locationData } = useWeather();

  if (locationData.lat !== null && locationData.lon !== null) {
    parsedGeoLocation.latitude = locationData.lat;
    parsedGeoLocation.longitude = locationData.lon;
  }

  const { data, isLoading, isError } = useWeatherApi(
    parsedGeoLocation.latitude,
    parsedGeoLocation.longitude
  );

  if (isLoading) return <SkeletonWrapper />;
  if (isError) return <div>Error loading data</div>;

  return (
    <>
      {data ? (
        <div className="flex flex-col gap-14 w-full">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-6xl text-center">
              {locationData.city ? locationData.city : data.name}
            </h1>
            <p> Last record: {new Date(data.dt * 1000).toLocaleString()}</p>
            <Image
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
              alt="weather-icon"
              width={150}
              height={150}
            />
            <ul className="flex flex-col gap-1">
              <li className="capitalize text-center text-3xl">
                {data.weather[0].main}
              </li>
              <li className="capitalize text-center">
                {data.weather[0].description}
              </li>
              <li className="text-4xl text-center">{data.main.temp}°C</li>
            </ul>
          </div>
          <CityDataList {...data} />
        </div>
      ) : (
        <h2>No city data found</h2>
      )}
    </>
  );
};
