import {useNavigate, useParams} from "react-router-dom";
import {Dispatch, FormEvent, SetStateAction, useEffect} from "react";
import {Button, TextField} from "@mui/material";
import {Spot} from "../models/Spot";
import './Form.css'
import SpotMapComponent from "./SpotMapComponent";

type EditProps = {
    loadSpotById: (id: string) => void,
    updateSpot: (spot: Spot) => void
    spot: Spot,
    setSpot: Dispatch<SetStateAction<Spot>>
    spots: Spot []
}

export default function EditDelivery(props: EditProps) {
    const {id} = useParams();
    const navigate = useNavigate();

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
        }
        navigate("/")
    }
    return (
        <div>
            <SpotMapComponent spot={props.spot} setSpot={props.setSpot} spots={props.spots} isSpotToEdit={true}/>

            <form className="form" onSubmit={onUpdateSpot}>
                <TextField label='name'
                           value={props.spot.name}
                           onChange={(event) => props.setSpot({...props.spot, name: event.target.value})}
                />
                <Button
                    className='myButton'
                    variant='contained'
                    color="success"
                    type='submit'
                >update</Button>

            </form>
        </div>
    )
}
