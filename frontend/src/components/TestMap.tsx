import {MapContainer, TileLayer} from "react-leaflet";



export default function TestMap() {



    return (
        <MapContainer
            center={[50.9412, 6.9582]}
            zoom={15}
            scrollWheelZoom={true}
            style={{ width: "100vw", height: "80vh" }}
        >

            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />





        </MapContainer>
    );
}