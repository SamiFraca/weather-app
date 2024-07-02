'use client';
import React from "react";
import { LocationType, GeoLocation } from "@/app/components/geo-location";

export const GeoLocationWrapper: React.FC = () => {
    const [location, setLocation] = React.useState<LocationType | null>(null);

  return (
      <GeoLocation onLocationFetched={setLocation} />
  );
};
