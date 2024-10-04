import React from "react";
import { TileLayer } from "react-leaflet";

export default function TileManager() {
    const stamenToner =
        "https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png";
    return (
        <TileLayer
            attribution={`&copy; <a href="https://www.stadiamaps.com/" target="_blank">
                        Stadia Maps</a> 
                    &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> 
                    &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> 
                    &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`}
            url={stamenToner}
        />
    );
}
