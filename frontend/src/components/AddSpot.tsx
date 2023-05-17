import {Spot} from "../models/Spot";
import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button, TextField} from "@mui/material";
import './Form.css'
import SpotMapComponent from "./SpotMapComponent";

type AddSpotProps = {
    spots: Spot []
    addSpot: (newSpot: Spot) => void

}

export default function AddSpot(props: AddSpotProps) {

    const navigate = useNavigate()
    const [spot, setSpot] = useState<Spot>({id: "", coordinates: {latitude: 50.9412, longitude: 6.9582}, name: ""})

    function onSaveSpot(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (spot.name === undefined || spot.name === "") {
            console.error("name required")
            return
        }
        props.addSpot(spot)
        navigate("/")
    }

    return (
        <div>
            <SpotMapComponent spot={spot} setSpot={setSpot} spots={props.spots} isSpotToEdit={false}/>

            <form className="form" onSubmit={onSaveSpot}>
                <TextField label='name'
                           required
                           value={spot.name}
                           onChange={(event) =>
                               setSpot({...spot, name: event.target.value})
                           }/>
                <Button
                    className='myButton'
                    variant='contained'
                    color="success"
                    type='submit'
                >Save</Button>

            </form>
        </div>
    )

}