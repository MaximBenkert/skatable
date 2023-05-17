
import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

export default function RouteToSpot() {
    const waypoints = [
        L.latLng(50.9891, 7.54),
        L.latLng(51.0135, 7.54)
    ];

    const map: L.Map = useMap();
    const addRoutingControl = (map: L.Map) => {
        L.Routing.control({
            waypoints: waypoints,
            lineOptions: {
                styles: [{ color: "000000", weight: 4 }],
                extendToWaypoints: false,
                missingRouteTolerance: 0
            }
        }).addTo(map);
    };



    useEffect(() => {
        addRoutingControl(map);
    }, [map]);

    return null; // Die Komponente muss kein JSX-Element zurückgeben
}

