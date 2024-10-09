import React from "react";
import ProviderInfo from "./ProviderInfo";

export default function ListingManager({ providers, markers }) {
    return (
        <section className="marker-list-container">
            {providers.map((provider) => {
                return (
                    <ProviderInfo
                        key={`listing_${provider.id}`}
                        provider={provider}
                        markers={markers}
                    />
                );
            })}
        </section>
    );
}
