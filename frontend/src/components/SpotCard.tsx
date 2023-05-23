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
        <Card style={{margin: "12px", padding:"23px", display: "flex", justifyContent: "space-between", alignItems: "center"}} variant="outlined" className="details-card">
            <big>{props.spot.name}</big>

            <ButtonGroup variant="text"
                         aria-label="text button group">
                <Button variant="outlined"
                        onClick={() => navigate(`/details/${props.spot.id}`)}>Details</Button>
            </ButtonGroup>
        </Card>
    )
}

