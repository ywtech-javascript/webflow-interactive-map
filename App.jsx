import "./App.css";
import React from "react";
import { MapContainer } from "react-leaflet";
import BoundsManager from "./components/BoundsManager";
import TileManager from "./components/TileManager";
import MarkerManager from "./components/MarkerManager";
import Listings from "./components/Listings";

import locationData from "./map-data";

export default function App() {
    // sort the data alphabetically:
    locationData.sort(function (a, b) {
        var keyA = a.name,
            keyB = b.name;
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    });

    return (
        <div className="layout">
            <MapContainer
                className="full-screen-map"
                center={[42.0357, -87.6894]}
                zoom={14}
                scrollWheelZoom={true}
            >
                <TileManager />
                <BoundsManager providers={locationData} />
                <MarkerManager providers={locationData} />
            </MapContainer>
            <section className="marker-list-container">
                <Listings providers={locationData} />
            </section>
        </div>
    );
}
