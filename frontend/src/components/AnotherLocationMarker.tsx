import React, {Dispatch, SetStateAction, useEffect} from "react";
import {Marker, Popup, useMapEvents} from "react-leaflet";
import {LatLng, LocationEvent} from "leaflet";

type Props = {
    position: LatLng
    setPosition: Dispatch<SetStateAction<LatLng>>
}
export default function AnotherLocationMarker(props: Props) {



    const map = useMapEvents({})


    const handleLocationFound = (event: LocationEvent) => {
        props.setPosition(event.latlng)
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



    return props.position === null ? null : (
        <Marker position={props.position}>
            <Popup>You are here</Popup>
        </Marker>
    )
}
