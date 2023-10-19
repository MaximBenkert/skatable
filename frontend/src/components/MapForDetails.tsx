import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import L, {LatLngTuple} from "leaflet";
import { Spot } from "../models/Spot";

type Props = {
    spot: Spot;
};

const spotIcon = new L.Icon({
    iconUrl: require("../resources/skateboard-icon.png"),
    iconSize: [80, 80],
});

export default function MapForDetails (props: Readonly <Props>) {

    const centerCoordinates: LatLngTuple = [props.spot.coordinates.latitude, props.spot.coordinates.longitude]


    const mapHeight: string = `60%`;



    return (
        <MapContainer
            key={props.spot.id}
            center={centerCoordinates}
            zoom={15}
            scrollWheelZoom={true}
            style={{width: "100%", height: mapHeight, maxWidth: "1200px"}}
        >

            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

                    <Marker
                        key={props.spot.id}
                        position={centerCoordinates}
                        icon={spotIcon}
                    >
                        <Popup>{props.spot.name}</Popup>
                    </Marker>

        </MapContainer>
    );
}