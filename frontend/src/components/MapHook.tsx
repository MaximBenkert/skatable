import {Dispatch, SetStateAction, useState} from "react";
import L, {LatLng} from "leaflet";
import {Marker, Popup, useMapEvent} from "react-leaflet";
import {Spot} from "../models/Spot";


type Props = {
    spot: Spot
    setSpot: Dispatch<SetStateAction<Spot>>
}

export default function MapHook(props: Props) {
    const [position, setPosition] = useState(new LatLng(props.spot.coordinates.latitude, props.spot.coordinates.longitude))

    useMapEvent("click", (event) => {
        setPosition(event.latlng)

        const spotWithNewCoordinates = {
            id: props.spot.id,
            coordinates: {
                latitude: event.latlng.lat,
                longitude: event.latlng.lng
            },
            name: props.spot.name
        };
        props.setSpot(spotWithNewCoordinates);
    })

    const spotIcon = new L.Icon({
        iconUrl: require("../resources/skateboard-icon.png"),
        iconSize: [80, 80]
    })

    return (
        <Marker position={position}
                icon={spotIcon}
                draggable={true}
        >
            <Popup>
                <p>Lat: {position.lat.toFixed(4)}</p>
                <p>Lng: {position.lng.toFixed(4)}</p>
            </Popup>


        </Marker>
    )
}
