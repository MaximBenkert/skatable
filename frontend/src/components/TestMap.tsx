import {MapContainer, TileLayer} from "react-leaflet";
import {LatLng, LatLngTuple} from "leaflet";
import {useState} from "react";
import { Spot } from "../models/Spot";
import AnotherLocationMarker from "./AnotherLocationMarker";
import RouteToSpot from "./RouteToSpot";

type Props = {
    spot: Spot;
};

export default function TestMap (props: Props) {

    const [position, setPosition] = useState<LatLng>(new LatLng(51.505, -0.09));
    const centerCoordinates: LatLngTuple = [props.spot.coordinates.latitude, props.spot.coordinates.longitude]



    return (
        <MapContainer
            center={centerCoordinates}
            zoom={15}
            scrollWheelZoom={true}
            style={{width: "70vw", height: "80vh"}}
        >

            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <AnotherLocationMarker position={position} setPosition={setPosition}/>

            <RouteToSpot spot={props.spot} currentPosition={position}/>

        </MapContainer>
    );
}