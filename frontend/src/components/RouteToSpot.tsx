import L, {LatLng} from "leaflet";
import "leaflet-routing-machine";
import {createControlComponent} from "@react-leaflet/core";
import {Spot} from "../models/Spot";

type Props = {
    spot: Spot,
    currentPosition: LatLng

}

export default function RouteToSpot(props: Props) {

    const waypoints: L.LatLng[] = [(props.currentPosition), new LatLng(props.spot.coordinates.latitude,props.spot.coordinates.longitude)];

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
