import {Spot} from "../models/Spot";
import {Typography} from "@mui/material";
import SpotCard from "./SpotCard";

type Props = {
    spots: Spot[]
    deleteSpot: (id:string) => void
}

export default function SpotGallery(props: Props) {

    return (
        <div className="spot-gallery">
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

        </div>
    )
}

