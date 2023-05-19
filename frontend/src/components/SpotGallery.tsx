import {Spot} from "../models/Spot";
import {Box, Container, Typography} from "@mui/material";
import SpotCard from "./SpotCard";
import './SpotGallery.css'

type Props = {
    spots: Spot[]
    deleteSpot: (id: string) => void
}

export default function SpotGallery(props: Props) {

    return (
        <Container className="spotgallery" maxWidth="lg">
            <Box>
                <Typography sx={{fontSize: "3rem", padding: "1rem"}} variant="h2" component="h2">
                    Spots
                </Typography>
                <ul>
                    {props.spots.map((spot) => {
                        return (
                            <SpotCard key={spot.id} spot={spot} deleteSpot={props.deleteSpot}/>
                        )
                    })
                    }
                </ul>
            </Box>
        </Container>
    )
}

