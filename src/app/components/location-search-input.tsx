"use client";
import { useState, useRef } from "react";
import { useGeoApi } from "@hooks/index";
import { CityGeoData } from "@/app/types";
import LocationSearchInputDropdown from "@/app/components/location-search-input-dropdown";
import { useRouter } from "next/navigation";
export const LocationSearchInput = () => {
  const [locationSearchInputValue, setLocationSearchInputValue] = useState("");
  const [cityData, setCityData] = useState<CityGeoData[]>([]);
  const [loading, setLoading] = useState(false);
  const { fetchCityData } = useGeoApi();
  const formRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleLocationSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoading(true);
    setLocationSearchInputValue(event.target.value);
    fetchCityData(event.target.value).then((data) => {
      setCityData(data);
      setLoading(false);
    });
  };
  const sendDataRouter = (data: CityGeoData) => {
    const encodedName = encodeURIComponent(`${data.name}${data.state ? `, ${data.state}` : ''}`);
    const url = `/${encodedName}?lat=${data.lat}&lon=${data.lon}`;
    router.push(url);
  };

  return (
    <div ref={formRef} className="flex flex-col md:px-0 px-2 md:w-[277px]">
      <form>
        <input
          alt="location"
          type="text"
          placeholder="Search for a location..."
          className="px-4 py-2 mb-4  focus:outline-none md:w-auto w-full md:mt-0 mt-2 focus:rounded-md focus:ring-2 focus:ring-blue-500 bg-transparent placeholder:text-slate-300 border-b"
          value={locationSearchInputValue}
          onChange={handleLocationSearchInputChange}
        />
      </form>
      {cityData && cityData.length > 0 ? (
        <LocationSearchInputDropdown
          isOpen={cityData.length > 0}
          onClose={() => setCityData([])}
          parentRef={formRef}
        >
          {loading ? (
            <>
              Loading..
            </>
          ) : (
            cityData.map((item) => (
              <li
                key={item.lat}
                title={`${item.name}, ${item.state} (${item.country})`}
                className="px-2 truncate hover:cursor-pointer hover:bg-slate-500 hover:bg-opacity-80 hover:rounded-md py-2 w-full  md:hover:bg-transparent md:hover:underline"
                onClick={() => {
                  sendDataRouter(item);
                }}
              >
                {item.name}{item.state ? `, ${item.state}` : ''} ({item.country})
              </li>
            ))
          )}
        </LocationSearchInputDropdown>
      ) : null}
    </div>
  );
};
