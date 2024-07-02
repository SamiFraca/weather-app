import { ICityWeatherData } from "@/app/types";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useWeatherApi = (lat: number, lon: number) => {
  const { data, error } = useSWR<ICityWeatherData>(
    `/api/getCityWeatherData?lat=${lat}&lon=${lon}`,
    fetcher
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};