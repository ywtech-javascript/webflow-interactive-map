import React from "react";
import { Marker } from "react-leaflet";
import ProviderInfo from "./ProviderInfo";
import { Popup } from "react-leaflet";

import Icon from "./Icon";

export default function MarkerManager({ providers }) {
    return (
        <>
            {providers.map((provider, idx) => {
                let className = "icon-marker";
                if (provider.accepts_ccap.toUpperCase() === "YES") {
                    className = "icon-marker-ccap";
                }
                return (
                    <Marker
                        key={`marker_${idx}`}
                        position={[provider.lat, provider.lng]}
                        icon={Icon({ className: className })}
                    >
                        <Popup>
                            <ProviderInfo
                                provider={provider}
                                className="popup"
                            />
                        </Popup>
                    </Marker>
                );
            })}
        </>
    );
}
