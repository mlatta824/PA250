"use client";

import React from "react";
import { getProcessedLocations, ProcessedLocation } from "../../lib/Locations";

export default function LocationsPage() {
  const markers: ProcessedLocation[] = getProcessedLocations();


  return (
    <div className = "container mx-auto p-8">
      <style jsx>{`
        .title-outline {
          color: white;
          }
      `}</style>

      <h1 className = "title-outline text-4x1 font-bold mb-6 text-center">
        PA Turnpike Historical Sites
      </h1>

      <div className = "title-outline grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {markers.map((marker) => (

          <div key = {marker.id} className = "border rounder-lg p-4 shadow-md bg-white text-gray-800">

            <h2 className = "text-x1 font-bold mb-2">{marker.name}</h2>
            <p className = "text-sm font-semibold text-gray-600 mb-2">
              Location: {marker.location}
            </p>

            <p className = "text-gray-700">{marker.description}</p>

          </div>
        ))}
      </div>

    </div>
  );
}