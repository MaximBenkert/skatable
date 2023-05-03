import {Spot} from "../models/Spot";
import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {Typography} from "@mui/material";

type DetailProps = {
    loadSpotById: (id: string) => void;
    spot: Spot
}

export default function SpotDetails(props: DetailProps) {
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            props.loadSpotById(id)
        }
        //eslint-disable-next-line
    }, [id])

    return (
        <div>
            {
                props.spot
                    ? <div>
                        <Typography>{props.spot.id}</Typography>
                        <Typography>{props.spot.coordinates.latitude}</Typography>
                        <Typography>{props.spot.coordinates.longitude}</Typography>
                        <Typography>{props.spot.name}</Typography>
                    </div>
                    : <div>... loading </div>
            }

        </div>
    )

}
