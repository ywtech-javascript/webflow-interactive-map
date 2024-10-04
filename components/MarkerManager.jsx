import React from "react";
import { Marker } from "react-leaflet";
import InfoBubble from "./InfoBubble";
import Icon from "./Icon";

export default function MarkerManager({ providers }) {
    return (
        <>
            {providers.map((provider, idx) => {
                return (
                    <Marker
                        key={`marker_${idx}`}
                        position={[provider.lat, provider.lng]}
                        icon={Icon}
                    >
                        <InfoBubble provider={provider} />
                    </Marker>
                );
            })}
        </>
    );
}
