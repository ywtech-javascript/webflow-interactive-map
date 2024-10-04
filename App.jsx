import "./App.css";
import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import InfoBubble from "./components/InfoBubble";
import Icon from "./components/Icon";
import BoundsManager from "./components/BoundsManager";

import locationData from "./map-data";

export default function App() {
    const stamenToner =
        "https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png";

    return (
        <MapContainer
            className="full-screen-map"
            center={[42.0357, -87.6894]}
            zoom={15}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution={`&copy; <a href="https://www.stadiamaps.com/" target="_blank">
                        Stadia Maps</a> 
                    &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> 
                    &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> 
                    &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`}
                url={stamenToner}
            />
            <BoundsManager providers={locationData} />
            {locationData.map((location, idx) => {
                return (
                    <Marker
                        key={`marker_${idx}`}
                        position={[location.lat, location.lng]}
                        icon={Icon}
                    >
                        <InfoBubble provider={location} />
                    </Marker>
                );
            })}
        </MapContainer>
    );
}
