import customLocationsData from '../data/locations.json'


export interface ProcessedLocation {
    id: string;
    name: string;
    description?: string;
    location?: string;
    latitude: string;
    longitude: string;
    imageUrl?: string;
}


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
    imageUrl?: string;
}

const rawLocations: PaMarker[] = customLocationsData as PaMarker[]

const processedLocations : ProcessedLocation[] = rawLocations
    .filter(marker => marker.latitude && marker.longitude && marker.markername)
    .map(marker => ({
        id: marker.id,
        name: marker.markername,
        description: marker.markertext,
        location: marker.location,
        latitude: marker.latitude,
        longitude: marker.longitude,
        imageUrl: marker.imageUrl

    }));


export function getProcessedLocations(): ProcessedLocation[] {
    return processedLocations;
}