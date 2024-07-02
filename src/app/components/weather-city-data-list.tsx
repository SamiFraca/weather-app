import { ICityWeatherData } from "@/app/types";

const CityDataList = (cityData: ICityWeatherData) => {
  const formatTimeStamp = (timestamp: number) => {
    const date = new Date(timestamp * 1000).getHours();
    if (date > 12) {
      return date + " pm";
    }
    return date + " am";
  };
  const formatTimeZone = (timezone: number) => {
    const formattedTimezone = timezone / 3600;
    if (timezone > 0) {
      return "+" + formattedTimezone;
    }
    return "-" + formattedTimezone;
  };

  return (
    <div className="flex md:flex-row  md:items-start md:justify-center text-start w-full   gap-14 flex-wrap px-4 md:px-0">
      <ul>
        <li>Feels like: {cityData.main.feels_like}°C</li>
        <li>Max temperature: {cityData.main.temp_max} °C</li>
        <li>Min temperature: {cityData.main.temp_min} °C</li>
        <li>Humidity: {cityData.main.humidity} %</li>
      </ul>
      <ul>
        <li>Sea level: {cityData.main.sea_level} m</li>
        <li>Ground level: {cityData.main.grnd_level} m</li>
        <li>Longitude: {cityData.coord.lon} </li>
        <li>Latitude: {cityData.coord.lat} </li>
      </ul>
      <ul>
        <li>Country: {cityData.sys.country}</li>
        <li>Sunrise: {formatTimeStamp(cityData.sys.sunrise)} </li>
        <li>Sunset: {formatTimeStamp(cityData.sys.sunset)}</li>
        <li>Timezone: UTC{formatTimeZone(cityData.timezone)}</li>
      </ul>
      <ul>
        <li>Wind: {cityData.wind.speed} m/s</li>
        <li>Degrees: {cityData.wind.deg}°</li>
        <li>Pressure: {cityData.main.pressure} hPa </li>
        <li>Visibility: {(cityData.visibility / 1000).toFixed(1)} km</li>
      </ul>
    </div>
  );
};
export {CityDataList}