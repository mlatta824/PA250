"use client"; // This tells Next.js that this file runs on the client (browser), not the server.

import React, { useEffect, useState } from "react"; // Import React and hooks to manage state and lifecycle.
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; // Import React-Leaflet components for the map.
import "leaflet/dist/leaflet.css"; // Import Leaflet's CSS so the map and markers display correctly.
import L from "leaflet"; // Import Leaflet library to fix the marker icon issue below.


// --- FIX FOR MISSING MARKER ICONS IN REACT BUILD ---
delete (L.Icon.Default.prototype as any)._getIconUrl; // Remove the old icon URL method that breaks in React builds.
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png", // High-res marker icon for Retina screens.
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png", // Standard marker icon.
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png", // Marker shadow icon.
});


// --- DEFINE TYPE FOR EACH LOCATION OBJECT ---
interface Location {
  markername?: string;   // Optional name of the historical marker.
  markertext?: string;   // Optional description text.
  location?: string;     // Optional location text (e.g., city, county).
  latitude?: string;     // Latitude value (string form in API).
  longitude?: string;    // Longitude value (string form in API).
  [k: string]: any;      // Allows other unknown fields to exist without errors.
}


// --- MAIN MAP COMPONENT ---
export function Map() {
  // Store the array of locations fetched from the API.
  const [locations, setLocations] = useState<Location[]>([]);
  // Track whether the map data is still loading.
  const [loading, setLoading] = useState(true);
  // Center coordinates for the PA Turnpike (roughly in the middle of Pennsylvania).
  const paTurnpikeCenter: [number, number] = [40.5, -77.5];


  // --- FETCH DATA FROM API WHEN COMPONENT LOADS ---
  useEffect(() => {
    // Variable to cancel state updates if the component unmounts.
    let cancelled = false;

    async function fetchData() {
      try {
        // Call your Next.js API route, which fetches data from the PA data portal.
        const res = await fetch("/api/locations");
        // Convert the JSON response into a JavaScript array.
        const data: Location[] = await res.json();

        // Log the first few records to inspect what the data looks like (for debugging).
        console.log("PA locations sample (first 3):", data.slice(0, 3));
        if (data.length) console.log("first record keys:", Object.keys(data[0]));

        // Filter out any entries missing valid latitude/longitude values.
        const validLocations = data.filter(
          (loc) =>
            loc.latitude &&
            loc.longitude &&
            !isNaN(Number(loc.latitude)) &&
            !isNaN(Number(loc.longitude))
        );

        // Only update state if the component is still active.
        if (!cancelled) setLocations(validLocations);
      } catch (err) {
        // Show an error in the console if the fetch fails.
        console.error("Error fetching locations:", err);
      } finally {
        // Once done (success or error), mark loading as false.
        if (!cancelled) setLoading(false);
      }
    }

    // Run the async fetch when the component mounts.
    fetchData();

    // Cleanup function — runs when the component unmounts to avoid memory leaks.
    return () => {
      cancelled = true;
    };
  }, []); // Empty array means this runs only once (on first render).


  // --- SHOW A MESSAGE WHILE DATA IS LOADING ---
  if (loading) return <p>Loading map...</p>;


  // --- RENDER THE MAP AND MARKERS ---
  return (
    <MapContainer
      center={paTurnpikeCenter} // Where the map starts centered.
      zoom={7}                  // Default zoom level.
      style={{ height: "600px", width: "100%", borderRadius: "12px" }} // Styling for the map container.
    >
      {/* The actual map tiles (visual layer) from OpenStreetMap */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Loop through all fetched locations and place a marker for each one */}
      {locations.map((loc, i) => {
        // Convert string lat/lng to numbers for Leaflet.
        const lat = Number(loc.latitude);
        const lng = Number(loc.longitude);

        // Skip any markers that don’t have valid coordinates.
        if (isNaN(lat) || isNaN(lng)) return null;

        // Try different possible name fields; fallback if missing.
        const title =
          loc.markername ||
          (loc as any).name ||
          (loc as any).marker_name ||
          loc.markertext ||
          loc.location ||
          `Marker ${i + 1}`;

        // Create a unique key for React using coordinates and index.
        const key = `${lat}-${lng}-${i}`;

        // Render a Leaflet marker at the location.
        return (
          <Marker key={key} position={[lat, lng]}>
            {/* Popup content that appears when the user clicks a marker */}
            <Popup>
              <h3 className="font-semibold text-lg">{title}</h3>
              {loc.location && <p>{loc.location}</p>}
              {loc.markertext && <p className="text-sm mt-1">{loc.markertext}</p>}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
