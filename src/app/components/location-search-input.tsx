"use client";
import { useState } from "react";
import { useGeoApi } from "../hooks";
import { ICityData } from "../hooks/useGeoApi";
export const LocationSearchInput = () => {
  const [locationSearchInputValue, setLocationSearchInputValue] = useState("");
  const [cityData, setCityData] = useState<ICityData[]>([]);
  const { fetchCityData } = useGeoApi();

  const handleLocationSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLocationSearchInputValue(event.target.value);
    fetchCityData(event.target.value).then((data) => {
      setCityData(data);
    });
  };

  return (
    <>
      <form>
        <input
          alt="location"
          type="text"
          placeholder="Search for a location..."
          className="w-full px-4 py-2  border-b  focus:outline-none  focus:rounded-md focus:ring-2 focus:ring-blue-500 bg-transparent placeholder:text-slate-300"
          value={locationSearchInputValue}
          onChange={handleLocationSearchInputChange}
        />
      </form>
      <ul className="flex flex-col gap-4 justify-start items-start">
        {cityData && cityData.length > 0 ? (
          cityData.map((item) => (
            <li key={item.lat}>
              {item.name}, {item.state} ({item.country})
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
    </>
  );
};
