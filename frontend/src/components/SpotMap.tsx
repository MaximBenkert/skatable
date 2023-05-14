import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

export default function SpotMap() {
    return (
        <MapContainer center={[50.9412, 6.9582]} zoom={13} scrollWheelZoom={false} style={{width: "95vw", height: "80vh" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

