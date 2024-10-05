import L from "leaflet";
import "./Icon.css";

export default function Icon({ className = "icon-marker", type = "md" }) {
    if (type === "sm") {
        return new L.Icon({
            iconUrl: "../images/1x1.png", // this is a hack
            iconSize: [20, 20], // size of the icon
            iconAnchor: [12, 12], // point of the icon which will correspond to marker's location
            popupAnchor: [1, -7],
            className: `${className} sm`,
        });
    } else if (type === "md") {
        return new L.Icon({
            iconUrl: "../images/1x1.png", // this is a hack
            iconSize: [35, 35], // size of the icon
            iconAnchor: [18, 18], // point of the icon which will correspond to marker's location
            popupAnchor: [3, -7],
            className: `${className} md`,
        });
    } else {
        return new L.Icon({
            iconUrl: "../images/1x1.png", // this is a hack
            iconSize: [50, 50], // size of the icon
            iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
            popupAnchor: [12, -15],
            className: `${className}`,
        });
    }
}
