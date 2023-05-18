import L, {LatLng} from "leaflet";
import "leaflet-routing-machine";
import {createControlComponent} from "@react-leaflet/core";

export default function RouteToSpot() {

    const waypoints: L.LatLng[] = [new LatLng(51.015, 7.54), new LatLng(50.9891, 7.5165)];

    const RoutingMachine = createControlComponent(() => new L.Routing.Control({
        waypoints: waypoints,
        lineOptions: {
            styles: [{color: "#DB745A", weight: 4}],
            extendToWaypoints: false,
            missingRouteTolerance: 0
        },
        altLineOptions: {
            styles: [{color: "#F2E36F", weight: 4}],
            extendToWaypoints: false,
            missingRouteTolerance: 0
        },
        showAlternatives: true,
        collapsible: true, //allows route description to be collapsed
    }))

    return (
        <>
            <RoutingMachine/>
        </>
    )
}
