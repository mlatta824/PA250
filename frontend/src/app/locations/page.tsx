"use client";

import React from "react";

type Marker = {
  id: string;
  name: string; // The title of the marker
  county: string;
  markertext: string; // The description on the marker
  latitude: string;
  longitude: string;
};

export default function LocationsPage() {
    const [markers, setMarkers] = React.useState<Marker[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {

        const fetchLocations = async () => {
            try {
                const response = await fetch('/api/locations');

                if (!response.ok) {
                    throw new Error('Failed to fetch locations');
            }

            const data: Marker[] = await response.json();
            setMarkers(data);

        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    fetchLocations();
    }, []);

      if (isLoading) {
    return <div className="text-center p-10">Loading historical markers...</div>;
  }

  if (error) {
    return <div className="text-center p-10 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Pennsylvania Historical Markers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {markers.map((marker) => (
          <div key={marker.id} className="border rounded-lg p-4 shadow-md bg-white text-gray-800">
            <h2 className="text-xl font-bold mb-2">{marker.name}</h2>
            <p className="text-sm font-semibold text-gray-600 mb-2">County: {marker.county}</p>
            <p className="text-gray-700">{marker.markertext}</p>
          </div>
        ))}
      </div>
    </div>
  );
}




