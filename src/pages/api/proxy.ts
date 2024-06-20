import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function getCityHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const {
      query: { city },
    } = req;
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=7&appid=${process.env.API_KEY}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}