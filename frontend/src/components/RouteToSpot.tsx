import L, {LatLng} from "leaflet";
import "leaflet-routing-machine"
import {createControlComponent} from "@react-leaflet/core"

export default function Routing() {
    const waypoints: LatLng[] = [new LatLng(51.015, 7.54), new LatLng(51.0135, 6.54)]

    const RoutingMachine = createControlComponent(() => new L.Routing.Control ({
        waypoints: waypoints,
        lineOptions: {
            styles: [{color: "000000", weight: 4}],
            extendToWaypoints: false,
            missingRouteTolerance: 0
        }
    }))

    return(
        <div>
            <RoutingMachine/>
        </div>


    )
}

