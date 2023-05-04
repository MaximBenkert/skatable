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
        <small> ID: {props.spot.id}</small>
        <p>Title: {props.spot.name}</p>
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

