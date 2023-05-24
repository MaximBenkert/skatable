import {Spot} from "../models/Spot";
import {Container, Typography} from "@mui/material";
import SpotCard from "./SpotCard";
import './SpotGallery.css'

type Props = {
    spots: Spot[]
}

export default function SpotGallery(props: Props) {

    return (
        <Container className="spotgallery" maxWidth="lg" sx={{ backgroundColor: "#9CBAC6" }}>

                <Typography sx={{fontSize: "3rem", padding: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }} variant="h2" component="h2">
                    Gallery
                </Typography>
                <div style={{ paddingBottom: "720px" }}>
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

