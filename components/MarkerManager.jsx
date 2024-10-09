import React from "react";
import Marker from "./Marker";

export default function MarkerManager({ providers, markers }) {
    return (
        <>
            {providers.map((provider) => {
                return (
                    <Marker
                        key={`marker_${provider.id}`}
                        provider={provider}
                        markers={markers}
                    />
                );
            })}
        </>
    );
}
