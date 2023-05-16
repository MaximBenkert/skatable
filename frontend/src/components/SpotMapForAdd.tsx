import {MapContainer, Marker, TileLayer} from "react-leaflet";
import {LatLngTuple} from "leaflet";
import {Dispatch, SetStateAction} from "react";
import {Spot} from "../models/Spot";
import MapHook from "./MapHook";


type SpotMapProps = {

    spot: Spot,
    spots: Spot [],
    setSpot: Dispatch<SetStateAction<Spot>>
}

export default function SpotMap(props: SpotMapProps) {
    //const [position, setPosition] = useState<LatLngTuple>([50.9412, 6.9582])

    const centerCoordinates: LatLngTuple = [50.9412, 6.9582]

    return (
        <div>
        <MapContainer center={centerCoordinates}
                      zoom={17}
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
                        <Marker key={spot.id} position={position}/>
                    )
                })
            }
            <MapHook spot={props.spot} setSpot={props.setSpot}/>

        </MapContainer>
        <p>test</p>
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
