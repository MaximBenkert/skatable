import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import { LatLngTuple } from "leaflet";
import { Dispatch, SetStateAction} from "react";
import { Spot } from "../models/Spot";
import MapHook from "./MapHook";
import AnotherLocationMarker from "./AnotherLocationMarker";

type CommonMapProps = {
    spot?: Spot;
    spots: Spot[];
    setSpot?: Dispatch<SetStateAction<Spot>>;
    isSpotToEdit: boolean;
};

export default function SpotMapComponent(props: CommonMapProps) {


    const centerCoordinates: LatLngTuple = props.isSpotToEdit && props.spot
        ? [props.spot.coordinates.latitude, props.spot.coordinates.longitude]
        : [50.9412, 6.9582];

    return (
        <MapContainer
            center={centerCoordinates}
            zoom={props.isSpotToEdit ? 17 : 15}
            scrollWheelZoom={true}
            style={{ width: "100vw", height: "80vh" }}
        >

            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {props.spots.map((spot) => {
                const position: LatLngTuple = [
                    spot.coordinates.latitude,
                    spot.coordinates.longitude,
                ];
                return <Marker key={spot.id} position={position}>
                    <Popup>
                        {spot.name}
                    </Popup>
                </Marker>
            })}

            {!props.isSpotToEdit && <AnotherLocationMarker/>}

            {props.spot && props.setSpot && <MapHook spot={props.spot} setSpot={props.setSpot} />}

        </MapContainer>
    );
}