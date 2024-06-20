const apiKey = process.env.API_KEY;
export const useWeatherApi = () => {
    const getWeatherFromLocation = async (lat: number, lon: number) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    };
    return { getWeatherFromLocation };
};