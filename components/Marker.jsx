import React, { useRef } from "react";
import { Marker as LeafletMarker, Popup } from "react-leaflet";
import ProviderInfo from "./ProviderInfo";

import Icon from "./Icon";

export default function Marker({ provider, markers, setActiveMarker }) {
    const markerRef = useRef(null);
    markers[provider.id] = markerRef;
    let className = "icon-marker";
    if (provider.accepts_ccap.toUpperCase() === "YES") {
        className = "icon-marker-ccap";
    }

    return (
        <LeafletMarker
            key={`marker_${provider.id}`}
            position={[provider.lat, provider.lng]}
            icon={Icon({ className: className })}
            ref={markerRef}
            eventHandlers={{
                click: () => {
                    markerRef.current.id = provider.id;
                    setActiveMarker(markerRef.current);
                },
            }}
        >
            <Popup>
                <ProviderInfo
                    provider={provider}
                    markers={markers}
                    className="popup"
                />
            </Popup>
        </LeafletMarker>
    );
}
