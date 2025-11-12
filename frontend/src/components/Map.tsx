"use client"; // This tells Next.js that this file runs on the client (browser), not the server.

import React, { useEffect, useState } from "react"; // Import React and hooks to manage state and lifecycle.
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; // Import React-Leaflet components for the map.
import "leaflet/dist/leaflet.css"; // Import Leaflet's CSS so the map and markers display correctly.
import L from "leaflet"; // Import Leaflet library to fix the marker icon issue below.
import {getProcessedLocations, ProcessedLocation} from "../lib/Locations";


// --- FIX FOR MISSING MARKER ICONS IN REACT BUILD ---
delete (L.Icon.Default.prototype as any)._getIconUrl; // Remove the old icon URL method that breaks in React builds.
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png", // High-res marker icon for Retina screens.
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png", // Standard marker icon.
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png", // Marker shadow icon.
});


// Had to rewrite to support GitHub pages -- Matthew
export function Map(){

  const locations: ProcessedLocation[] = getProcessedLocations();
  const centerlat = 40.5
  const centerlon = -77.5
  const turnpikeCenter: [number, number] = [centerlat, centerlon];

  return (
    <MapContainer
    center = {turnpikeCenter}
    zoom = {7}
    style = {{ height: "600px", width: "100%", borderRadius: "12px"}}
    >
      <TileLayer
      attribution = '&copy; <a href = "https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {locations.map((loc, i) => {
        const lat = Number(loc.latitude);
        const lon = Number(loc.longitude);

        if (isNaN(lat) || isNaN(lon)) return null;

        const title = loc.name || `Marker ${i + 1}`;
        const key = `${lat}-${lon}-${i}`;


        return (
          <Marker key = {key} position = {[lat, lon]}>
            <Popup>
              <h3 className = "font-semibold text-lg"> {title} </h3>

              {loc.location && <p>{loc.location}</p>}
              {loc.description && (<p className = "text-sm mt-1"> {loc.description} </p>)}

            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );

}