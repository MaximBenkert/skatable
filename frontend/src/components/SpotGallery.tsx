import {Spot} from "../models/Spot";
import {Container, Typography} from "@mui/material";
import SpotCard from "./SpotCard";
import './SpotGallery.css'

type Props = {
    spots: Spot[]
}

export default function SpotGallery(props: Props) {

    return (
        <Container className="spotgallery" maxWidth="lg">

                <Typography sx={{fontSize: "3rem", padding: "1rem"}} variant="h2" component="h2">
                    Spots
                </Typography>
                <div style={{ paddingBottom: "74px" }}>
                    {props.spots.map((spot) => {
                        return (
                            <SpotCard key={spot.id} spot={spot}/>
                        )
                    })
                    }
                </div>
        </Container>
    )
}

