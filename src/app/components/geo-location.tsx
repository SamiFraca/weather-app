"use client";
import React, { useEffect } from "react";

export type LocationType = {
  latitude: number;
  longitude: number;
};

type GeoLocationProps = {
  onLocationFetched: (location: LocationType) => void;
};

export const GeoLocation: React.FC<GeoLocationProps> = ({ onLocationFetched }) => {
  useEffect(() => {
    const storedLocation = localStorage.getItem("userGeoLocation");
    if (storedLocation && storedLocation !== "null") {
      onLocationFetched(JSON.parse(storedLocation));
    } else {
      if ("geolocation" in navigator && storedLocation !== "null") {
        navigator.geolocation.getCurrentPosition(
          ({ coords }) => {
            const { latitude, longitude } = coords;
            const location = { latitude, longitude };
            localStorage.setItem("userGeoLocation", JSON.stringify(location));
            onLocationFetched(location);
            window.location.reload();
          },
          (error) => {
            const { latitude, longitude } = { latitude: 40.416775, longitude: -3.703790 };
            const location = { latitude, longitude };
            localStorage.setItem("userGeoLocation", JSON.stringify(null));
            onLocationFetched(location);
          }
        );
      }
    }
  }, [onLocationFetched]);

  return null; 
};


