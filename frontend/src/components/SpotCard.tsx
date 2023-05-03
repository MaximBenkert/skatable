import {Spot} from "../models/Spot";
import {Card} from "@mui/material";
import React from "react";

type CardProps = {
    spot: Spot
}

export default function SpotCard(props: CardProps) {

    return (
        <Card variant="outlined">

            <p><big>{props.spot.name}</big></p>
            <small>Coordinates: {props.spot.coordinates.latitude} </small>
            <small>Coordinates: {props.spot.coordinates.longitude} </small>
        </Card>
    )
}