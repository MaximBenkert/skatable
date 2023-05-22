import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {LatLng, LatLngTuple} from "leaflet";
import {Dispatch, SetStateAction, useState} from "react";
import { Spot } from "../models/Spot";
import MapHook from "./MapHook";
import LocationMarker from "./LocationMarker";
import {useNavigate} from "react-router-dom";

type CommonMapProps = {
    spot?: Spot;
    spots: Spot[];
    setSpot?: Dispatch<SetStateAction<Spot>>;
    isSpotToEdit: boolean;
    mapHeight: string
};

export default function SpotMapComponent(props: CommonMapProps) {
    const navigate = useNavigate()

    const [position, setPosition] = useState<LatLng>(new LatLng(50.9413, 6.9585));

    const centerCoordinates: LatLngTuple = props.isSpotToEdit && props.spot
        ? [props.spot.coordinates.latitude, props.spot.coordinates.longitude]
        : [50.9392, 6.9404];

    return (
        <div>
        <MapContainer
            center={centerCoordinates}
            zoom={props.isSpotToEdit ? 17 : 15}
            scrollWheelZoom={true}
            style={{width: "100vw", height: props.mapHeight}}
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
                return <Marker key={spot.id}
                               position={position}
                               eventHandlers={{
                                   click: () => navigate("/details/" + spot.id)
                               }}>
                    <Popup eventHandlers={{

                    }}>
                        {spot.name}
                    </Popup>
                </Marker>
            })}

            {!props.isSpotToEdit && <LocationMarker position={position} setPosition={setPosition}/>}

            {props.spot && props.setSpot && <MapHook spot={props.spot} setSpot={props.setSpot} />}

        </MapContainer>
        </div>
    );
}