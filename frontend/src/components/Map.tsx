"use client";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {GET} from '../app/api/locations/route';


// Fix missing marker icons (Leaflet path issue in React builds)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});



export function Map() {
  const [locations, setLocations] = useState<[]>([]);
  const [loading, setLoading] = useState(true);
  const paTurnpikeCenter = [40.5, -77.5];  

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/locations");
        const data: [] = await res.json();
        setLocations(data);
      } catch (err) {
        console.error("Error fetching locations:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading map...</p>;
  
  //const response = GET();


  // Get the data array from api 
  // call GET() from /api/locations/route yadayada

  return (
    <MapContainer
      center={paTurnpikeCenter}
      zoom={7}
      style={{ height: "600px", width: "100%", borderRadius: "12px" }}
    >
      {/* OpenStreetMap tiles */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Example marker */}
      {/* TODO: Replace with markers from response */}
       <Marker position={paTurnpikeCenter}>
            <Popup>
            <h3>sfb</h3>
            <p>safb</p>
            </Popup>
        </Marker>   
    </MapContainer>
  );
}
