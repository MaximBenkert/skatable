import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";
import {DomUtil, LatLng, LatLngTuple} from "leaflet";
import setPosition = DomUtil.setPosition;
import {Dispatch, SetStateAction, useState} from "react";
import MapHook from "./MapHook";
import {Spot} from "../models/Spot";

type SpotMapProps = {
    spots: Spot [],
    setSpots: Dispatch<SetStateAction<Spot[]>>,
    spot: Spot,
    setSpot: Dispatch<SetStateAction<Spot>>
}

export default function SpotMap(props: SpotMapProps) {

    const coordinates: LatLngTuple = [50.9412, 6.9582]

    //const [position, setPosition] = useState<LatLngTuple>([50.9412, 6.9582])


    return (
        <MapContainer center={coordinates}
                      zoom={13}
                      scrollWheelZoom={true}
                      style={{width: "95vw", height: "80vh"}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                props.spots.map((spot) => {
                    const position: LatLngTuple = [spot.coordinates.latitude, spot.coordinates.longitude]
                    return(
                        <Marker key={spot.id} position={position}/>
                    )
                })
            }





        </MapContainer>
    )
}

/*
<Marker
    position={position}
    draggable={true}
    eventHandlers = {
        {mouseup: (event) => {
                setPosition([event.latlng.lat, event.latlng.lng])
            }
        }}
>

    <Popup>
        Der Dom <br/> in Kölle
    </Popup>
</Marker>*/
