import { NextApiRequest, NextApiResponse } from "next";

export async function getCityWeatherData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { lat, lon },
  } = req;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.API_KEY}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch city weather data");
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch city weather data" });
  }
}

export default getCityWeatherData;