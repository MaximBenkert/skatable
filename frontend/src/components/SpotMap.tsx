
import { Dispatch, SetStateAction, useEffect } from "react";
import { Spot } from "../models/Spot";
import { useParams } from "react-router-dom";
import SpotMapComponent from "./SpotMapComponent";

type SpotMapProps = {
    loadSpotById?: (id: string) => void;
    spot?: Spot;
    setSpot?: Dispatch<SetStateAction<Spot>>;
    spots: Spot[];
};

export default function SpotMap(props: SpotMapProps) {
    const { id } = useParams();

    useEffect(() => {
        if (props.loadSpotById && id) {
            props.loadSpotById(id);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const isEditable = !!props.setSpot;

    return (
        <div>
            <SpotMapComponent
                spot={props.spot}
                spots={props.spots}
                setSpot={props.setSpot}
                isEditable={isEditable}
            />
        </div>
    );
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
