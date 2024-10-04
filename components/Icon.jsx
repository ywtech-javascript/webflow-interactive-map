import L from "leaflet";
import "./Icon.css";
const iconPerson = new L.Icon({
    iconUrl: "../images/1x1.png", // this is a hack
    iconSize: [50, 50], // size of the icon
    iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
    popupAnchor: [12, -15],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: "icon-marker",
});

export default iconPerson;
