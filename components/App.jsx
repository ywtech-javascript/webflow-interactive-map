import "./App.css";
import "./leaflet.css";
import React from "react";
import { MapContainer } from "react-leaflet";
import BoundsManager from "./BoundsManager";
import TileManager from "./TileManager";
import MarkerManager from "./MarkerManager";
import ProviderInfo from "./ProviderInfo";

// import locationData from "./map-data";

export default function App() {
    const bounds = [
        [42.1, -87.85],
        [41.95, -87.6],
    ];
    return (
        <div className="layout">
            <section className="marker-list-container">
                {window.mapData.map((provider, idx) => {
                    return (
                        <ProviderInfo
                            key={`marker_${idx}`}
                            provider={provider}
                        />
                    );
                })}
            </section>

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
                <MarkerManager providers={window.mapData} />
            </MapContainer>
        </div>
    );
}
