import "./App.css";
import "./leaflet.css";
import React, { useState, useEffect } from "react";
import { MapContainer } from "react-leaflet";
import BoundsManager from "./BoundsManager";
import TileManager from "./TileManager";
import ProviderInfo from "./ProviderInfo";
import Marker from "./Marker";

export default function App() {
    const bounds = [
        [42.1, -87.85],
        [41.95, -87.6],
    ];
    const [activeMarker, setActiveMarker] = useState(null);
    const [zoomLevel, setZoomLevel] = useState(13);
    const markers = {};

    // sort and append IDs:
    window.mapData.forEach((provider, idx) => {
        provider.id =
            provider.name.replaceAll(" ", "_").toLowerCase() + "_" + idx;
    });

    useEffect(() => {
        if (activeMarker) {
            activeMarker.openPopup();
        }
    }, [activeMarker]);

    function setActiveMarkerById(markerId) {
        markers[markerId].current.id = markerId;
        setActiveMarker(markers[markerId].current);
    }

    return (
        <div className="layout">
            <section className="marker-list-container">
                {window.mapData.map((provider) => {
                    return (
                        <ProviderInfo
                            key={`listing_${provider.id}`}
                            provider={provider}
                            setActiveMarkerById={setActiveMarkerById}
                            activeMarker={activeMarker}
                        />
                    );
                })}
            </section>

            <MapContainer
                className="full-screen-map"
                center={[42.03, -87.738]}
                zoom={zoomLevel}
                scrollWheelZoom={true}
                minZoom={12}
                maxBounds={bounds}
            >
                <TileManager />
                <BoundsManager
                    providers={window.mapData}
                    setZoomLevel={setZoomLevel}
                />
                {window.mapData.map((provider) => {
                    return (
                        <Marker
                            key={`marker_${provider.id}`}
                            provider={provider}
                            markers={markers}
                            setActiveMarkerById={setActiveMarkerById}
                        />
                    );
                })}
            </MapContainer>
        </div>
    );
}
