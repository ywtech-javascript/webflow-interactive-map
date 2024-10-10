import "./App.css";
import "./leaflet.css";
import React, { useState } from "react";
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
    let activeMarker = null;
    const markers = {};
    const markerListings = {};

    // sort and append IDs:
    window.mapData.forEach((provider, idx) => {
        provider.id =
            provider.name.replaceAll(" ", "_").toLowerCase() + "_" + idx;
    });

    function showPopup() {
        activeMarker.openPopup();
    }

    function setActiveMarker(marker) {
        activeMarker = marker;
        showPopup();
    }

    function setActiveMarkerById(markerId) {
        activeMarker = markers[markerId].current;
        showPopup();
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
            {/* <ListingManager providers={window.mapData} markers={markers} /> */}

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
                <>
                    {window.mapData.map((provider) => {
                        return (
                            <Marker
                                key={`marker_${provider.id}`}
                                provider={provider}
                                markers={markers}
                                setActiveMarker={setActiveMarker}
                            />
                        );
                    })}
                </>
                {/* <MarkerManager providers={window.mapData} markers={markers} /> */}
            </MapContainer>
        </div>
    );
}
