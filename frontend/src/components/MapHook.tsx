import {Dispatch, SetStateAction, useState} from "react";
import {LatLng, LatLngTuple} from "leaflet";
import {Marker, Popup, useMap, useMapEvent} from "react-leaflet";
import {Spot} from "../models/Spot";

type Props = {
    spot: Spot
    setSpot: Dispatch<SetStateAction<Spot>>
}

export default function MapHook(props: Props) {
    const [position, setPosition] = useState(new LatLng(props.spot.coordinates.latitude, props.spot.coordinates.longitude))
    useMapEvent("click", (event) => {
        setPosition(event.latlng)
    })

    return (
        <Marker position={position}>
            <Popup>
                <p>Lat: {position.lat.toFixed(4)}</p>
                <p>Lng: {position.lng.toFixed(4)}</p>
            </Popup>


        </Marker>
    )
}
