import {Spot} from "../models/Spot";
import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {Button, ButtonGroup, Card} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import MapForDetails from "./MapForDetails";

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
        <div>


            {props.spot ?
                <Card variant="outlined" sx={{p: "0.8rem", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#9CBAC6"}}>
                    <big>{props.spot.name}</big>
                </Card>
                :
                <p>... loading</p>}

            <MapForDetails spot={props.spot}/>

            <ButtonGroup sx={{display: "flex", justifyContent: "space-between", padding: "12px", backgroundColor: "#9CBAC6"}} variant="text"
                         aria-label="text button group">
                <Button sx={{backgroundColor: "inherit", color: "inherit"}}
                        variant="outlined"
                        onClick={() => navigate(`/gallery`)}>Back</Button>
                <Button sx={{backgroundColor: "inherit", color: "inherit"}}
                        variant="outlined"
                        endIcon={<EditIcon/>}
                        onClick={() => navigate(`/edit/${props.spot.id}`)}>Edit</Button>
            </ButtonGroup>

        </div>

    )

}


