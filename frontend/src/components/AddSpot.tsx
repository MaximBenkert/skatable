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
    const mapHeight = `calc(100vh - 244px)`;

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
        <div style={{ backgroundColor:"#9CBAC6"}}>
            <SpotMapComponent spot={spot} setSpot={setSpot} spots={props.spots} isSpotToEdit={false} mapHeight={mapHeight}/>


            <form className="form" onSubmit={onSaveSpot} style={{ color: "#6699CC"}}>
                <TextField label='name your spot'
                           required
                           value={spot.name}
                           onChange={(event) =>
                               setSpot({...spot, name: event.target.value})
                           }/>
                <Button
                    className='myButton'
                    variant='contained'
                    color="inherit"
                    type='submit'
                >Save</Button>

            </form>
        </div>
    )

}