export interface ICityData {
  country: string;
  name: string;
  lat: number;
  lon: number;
  state?: string;
}
export const useGeoApi = () => {
  const fetchCityData = async (city: string): Promise<ICityData[]> => {
    const response = await fetch(`/api/proxy?city=${city}`, {
      headers: {
        Accept: "application/json",
      },
    });
    return response.json();
  };
  return { fetchCityData };
};
