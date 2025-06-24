import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px',
};

const center = {
    lat: 37.7749, // Example: San Francisco
    lng: -122.4194,
};

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export default function GoogleMapLookOutMode() {
    if (!GOOGLE_MAPS_API_KEY) {
        return <div>Error: Google Maps API key is not set.</div>;
    }
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    });

    if (loadError) return <div>Error loading maps</div>;
    if (!isLoaded) return <div>Loading Maps...</div>;

    return (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
            {/* Add map children/components here */}
        </GoogleMap>
    );
}
