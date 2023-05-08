import {Spot} from "../models/Spot";
import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {Box, Button, ButtonGroup, Card, Container, Typography} from "@mui/material";

type DetailProps = {
    loadSpotById: (id: string) => void;
    spot: Spot
}

export default function SpotDetails(props: DetailProps) {
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            props.loadSpotById(id)
        }
        //eslint-disable-next-line
    }, [id])

    return (
        <Container maxWidth="lg">
            <Box sx={{bgcolor: '#efebe9', p: "1rem", pb: "3rem"}}>
                <Typography sx={{fontSize: "1.5rem", padding: "1rem"}} variant="h2" component="h2">
                    Spot Details
                </Typography>
                {props.spot ?
                    <Card variant="outlined" sx={{p: "0.8rem"}}>
                        <p>{props.spot.name}</p>
                        <p> Coordinates: </p>
                        <small>Latitude: {props.spot.coordinates.latitude}, </small>
                        <small>Longitude: {props.spot.coordinates.longitude}</small>
                        <ButtonGroup sx={{display: "flex", justifyContent: "space-between"}} variant="text"
                                     aria-label="text button group">
                            <Button variant="outlined"
                                    onClick={() => navigate(`/`)}>Back</Button>
                        </ButtonGroup>

                    </Card>
                    :
                    <p>... loading</p>}
            </Box>
        </Container>

    )

}


