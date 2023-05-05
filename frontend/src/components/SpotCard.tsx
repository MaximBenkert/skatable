import {Spot} from "../models/Spot";
import {Button, ButtonGroup, Card} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';

type CardProps = {
    spot: Spot
    deleteSpot: (id: string) => void;
}

export default function SpotCard(props: CardProps) {
    const navigate = useNavigate()

    function onDeleteClick() {
        props.deleteSpot(props.spot.id)
    }
    return (
    <Card variant="outlined" className="details-card">
        <big>{props.spot.name}</big>
        <p> Coordinates: </p>
        <small>Latitude: {props.spot.coordinates.latitude}, </small>
        <small>Longitude: {props.spot.coordinates.longitude}</small>
        <ButtonGroup sx={{display: "flex", justifyContent: "space-between"}} variant="text"
                     aria-label="text button group">
            <Button variant="outlined"
                    onClick={() => navigate(`/details/${props.spot.id}`)}>Details</Button>
            <Button color="error" endIcon={<DeleteIcon/>}
                    onClick={onDeleteClick}>Delete</Button>
        </ButtonGroup>
    </Card>
    )
}

