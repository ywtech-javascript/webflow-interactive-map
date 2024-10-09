import "./App.css";
import "./leaflet.css";
import React from "react";
import { MapContainer } from "react-leaflet";
import BoundsManager from "./BoundsManager";
import TileManager from "./TileManager";
import MarkerManager from "./MarkerManager";
import ListingManager from "./ListingManager";

export default function App() {
    const bounds = [
        [42.1, -87.85],
        [41.95, -87.6],
    ];
    const markers = {};
    const markerListings = {};

    // sort and append IDs:
    window.mapData.forEach((provider, idx) => {
        provider.id =
            provider.name.replaceAll(" ", "_").toLowerCase() + "_" + idx;
    });

    return (
        <div className="layout">
            <ListingManager providers={window.mapData} markers={markers} />

            <MapContainer
                className="full-screen-map"
                center={[42.03, -87.738]}
                zoom={13}
                scrollWheelZoom={true}
                minZoom={12}
                maxBounds={bounds}
            >
                <TileManager />
                <BoundsManager providers={window.mapData} />
                <MarkerManager providers={window.mapData} markers={markers} />
            </MapContainer>
        </div>
    );
}
