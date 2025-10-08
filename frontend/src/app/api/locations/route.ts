import { NextResponse } from 'next/server';

const PA_MARKERS_API_URL = 'https://data.pa.gov/resource/xt8f-pzzz.json'; // PA Markers


export async function GET() {
    try {
        const response = await fetch(PA_MARKERS_API_URL);

        if (!response.ok) {
            throw new Error('Failed to fetch data from PA Markers API: {status: 500}');
        }

        const locations = await response.json();

        return NextResponse.json(locations);

    } catch (error) {
        return new NextResponse('Failed to fetch data from PA Markers API' , {status: 500});
    }

}