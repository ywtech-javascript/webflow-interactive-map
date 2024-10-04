import "./App.css";
import React from "react";
import { MapContainer } from "react-leaflet";
import BoundsManager from "./components/BoundsManager";
import TileManager from "./components/TileManager";
import MarkerManager from "./components/MarkerManager";

import locationData from "./map-data";

export default function App() {
    return (
        <MapContainer
            className="full-screen-map"
            center={[42.0357, -87.6894]}
            zoom={15}
            scrollWheelZoom={true}
        >
            <TileManager />
            <BoundsManager providers={locationData} />
            <MarkerManager providers={locationData} />
        </MapContainer>
    );
}
