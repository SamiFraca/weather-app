import { CityGeoData } from "@/app/types";
export const useGeoApi = () => {
  const fetchCityData = async (city: string): Promise<CityGeoData[]> => {
    const response = await fetch(`/api/getCityGeoData?city=${city}`, {
      headers: {
        Accept: "application/json",
      },
    });
    return response.json();
  };
  return { fetchCityData };
};
