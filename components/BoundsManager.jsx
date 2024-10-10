import { useMap } from "react-leaflet";
import L from "leaflet";

export default function BoundsManager({ providers, setZoomLevel }) {
    const map = useMap();
    const points = providers.map((provider) => [provider.lat, provider.lng]);
    var bounds = new L.LatLngBounds(points);
    map.fitBounds(bounds);
}
