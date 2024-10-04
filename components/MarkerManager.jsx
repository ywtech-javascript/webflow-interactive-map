import React from "react";
import { Marker } from "react-leaflet";
import ProviderInfo from "./ProviderInfo";
import { Popup } from "react-leaflet";

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
