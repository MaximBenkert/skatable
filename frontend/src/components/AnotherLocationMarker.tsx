import React, {useEffect, useState} from "react";
import {Marker, Popup, useMapEvents} from "react-leaflet";
import {LatLng, LocationEvent} from "leaflet";

export default function AnotherLocationMarker() {
    const [position, setPosition] = useState<LatLng | null>(null)
    const map = useMapEvents({})


    const handleLocationFound = (event: LocationEvent) => {
        setPosition(event.latlng)
        map.flyTo(event.latlng, map.getZoom())
    }
    useEffect(() => {
        map.locate()
        map.on('locationfound', handleLocationFound)

        return () => {
            map.off('locationfound', handleLocationFound)
        }
        //eslint-disable-next-line
    }, [])



    return position === null ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    )
}
