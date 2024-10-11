import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

export default function BoundsManager({ providers }) {
    const map = useMap();

    function zoomToExtent() {
        const points = providers.map((provider) => [
            provider.lat,
            provider.lng,
        ]);
        var bounds = new L.LatLngBounds(points);
        map.fitBounds(bounds);
    }

    // wrapped in useEffect so only fires once:
    useEffect(() => {
        zoomToExtent();
    }, []);
}
