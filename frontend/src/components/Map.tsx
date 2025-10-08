"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix missing marker icons (Leaflet path issue in React builds)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export function Map() {
  const paTurnpikeCenter = [40.5, -77.5]; // approximate PA center

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
      <Marker position={[40.0667, -75.29]}>
        <Popup>
          <h3>King of Prussia Service Plaza</h3>
          <p>Opened in 1950s — a key stop on the original PA Turnpike.</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
