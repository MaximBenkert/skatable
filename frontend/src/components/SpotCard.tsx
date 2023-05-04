import {Spot} from "../models/Spot";
import {Button, ButtonGroup, Card} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";

type CardProps = {
    spot: Spot
}

export default function SpotCard(props: CardProps) {
    const navigate = useNavigate()

    return (


    <Card variant="outlined" className="details-card">
        <small> ID: {props.spot.id}</small>
        <p>Title: {props.spot.name}</p>
        <ButtonGroup sx={{display: "flex", justifyContent: "space-between"}} variant="text"
                     aria-label="text button group">
            <Button variant="outlined"
                    onClick={() => navigate(`/details/${props.spot.id}`)}>Details</Button>
        </ButtonGroup>
    </Card>
    )
}

