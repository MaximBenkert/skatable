import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {LatLngTuple} from "leaflet";
import {Dispatch, SetStateAction} from "react";
import {Spot} from "../models/Spot";

type SpotMapProps = {
    spots: Spot [],
    setSpots: Dispatch<SetStateAction<Spot[]>>,
    spot: Spot,
    setSpot: Dispatch<SetStateAction<Spot>>
}

export default function SpotMap(props: SpotMapProps) {

    const centerCoordinates: LatLngTuple = [50.9412, 6.9582]

    //const [position, setPosition] = useState<LatLngTuple>([50.9412, 6.9582])


    return (
        <div>
        <MapContainer center={centerCoordinates}
                      zoom={13}
                      scrollWheelZoom={true}
                      style={{width: "100vw", height: "60vh"}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />


            {
                props.spots.map((spot) => {
                    const position: LatLngTuple = [spot.coordinates.latitude, spot.coordinates.longitude]
                    return(
                        <Marker key={spot.id} position={position}>
                            <Popup>
                                <p>Name: {spot.name}</p>
                            </Popup>
                        </Marker>
                    )
                })
            }

        </MapContainer>
        </div>
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
