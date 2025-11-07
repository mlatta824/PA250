import { NextResponse } from 'next/server';

import customLocationsData from '../../../data/locations.json';

// Interface for locations
interface Location {
  id: string;
  name: string;
  description?: string;
  location?: string;
  latitude: string;
  longitude: string;
}


// API structure
interface PaMarker {
  id: string;
  markername: string;
  county: string;
  markertext: string;
  latitude: string;
  longitude: string;
  dedicateddate?: string;
  markertype?: string;
  location?: string;
  status?: string;
}

const customLocations: PaMarker[] = customLocationsData as PaMarker[];



export async function GET() {
    let locations: Location[] = [];


    try {
        locations = customLocations
        .filter(marker => marker.latitude && marker.longitude) 
        .map(marker =>({

            id: marker.id,
            name: marker.markername,
            description: marker.markertext,
            location: marker.location,
            latitude: marker.latitude,
            longitude: marker.longitude

        }));
    } catch(error) {
        console.error('Error processing locations', error);

        return new NextResponse('Failed to process locations', { status: 500 });
    }

    return NextResponse.json(locations);



}