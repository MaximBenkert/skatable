import {Spot} from "../models/Spot";
import {Card} from "@mui/material";
import React from "react";

type CardProps = {
    spot: Spot
}

export default function SpotCard(props: CardProps) {

    return (
        <Card variant="outlined">
            <small>ID: {props.spot.id}</small>
            <p>Name: {props.spot.name}</p>
            <big>Coordinates: {props.spot.coordinates.latitude}</big>
            <big>Coordinates: {props.spot.coordinates.longitude}</big>
        </Card>
    )
}