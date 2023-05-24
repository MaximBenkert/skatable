import {useNavigate, useParams} from "react-router-dom";
import React, {Dispatch, FormEvent, SetStateAction, useEffect} from "react";
import {Button, TextField} from "@mui/material";
import {Spot} from "../models/Spot";
import './Form.css'
import SpotMapComponent from "./SpotMapComponent";
import DeleteIcon from "@mui/icons-material/Delete";

type EditProps = {
    loadSpotById: (id: string) => void,
    updateSpot: (spot: Spot) => void
    spot: Spot,
    setSpot: Dispatch<SetStateAction<Spot>>
    spots: Spot []
    deleteSpot: (id: string) => void
}

export default function EditDelivery(props: EditProps) {
    const {id} = useParams();
    const navigate = useNavigate();
    const mapHeight = `calc(100vh - 250px)`;

    useEffect(() => {
        if (id) {
            props.loadSpotById(id);
        }
        //eslint-disable-next-line
    }, [id])

    function onUpdateSpot(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (id) {
            props.updateSpot(props.spot)
            navigate("/")
        }
    }

    function onDeleteClick() {
        const confirmed = window.confirm("Möchten Sie den Spot wirklich löschen?");
        if (confirmed) {
            props.deleteSpot(props.spot.id);
            navigate("/");
        }
    }


    return (
        <div>
            <SpotMapComponent spot={props.spot} setSpot={props.setSpot} spots={props.spots} isSpotToEdit={true}
                              mapHeight={mapHeight}/>

            <form className="form"
                  onSubmit={onUpdateSpot}>
                <TextField label='name'
                           value={props.spot.name}
                           onChange={(event) => props.setSpot({...props.spot, name: event.target.value})}
                />
                <Button
                    variant='contained'
                    color="success"
                    type='submit'
                >update</Button>

                <Button className="myButton"
                        variant="outlined"
                        color="error"
                        endIcon={<DeleteIcon/>}
                        onClick={onDeleteClick}></Button>

            </form>

        </div>
    )
}
