import {Spot} from "../models/Spot";
import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button, TextField} from "@mui/material";
import './Form.css'
import SpotMap from "./SpotMap";

type AddSpotProps = {
    spots: Spot []
    addSpot: (newSpot: Spot) => void

}

export default function AddSpot(props: AddSpotProps) {

    const navigate = useNavigate()
    const [spot, setSpot] = useState<Spot>({id: "", coordinates: {latitude: 50, longitude: 5}, name: ""})

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
            <SpotMap spot={spot} setSpot={setSpot} spots={props.spots}/>

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

/*
<FormControl>
    <InputLabel htmlFor="latitude">Latitude</InputLabel>
    <Input
        id="latitude"
        type="number"
        inputProps={{
            step: 0.0000000000000000001,
            min: -90,
            max: 90,
        }}
        required
        value={spot.coordinates.latitude}
        error={spot.coordinates.latitude < -90 || spot.coordinates.latitude > 90}
        onChange={(event) => setSpot({...spot, coordinates: { ...spot.coordinates, latitude: parseFloat(event.target.value)}})}
    />
    {spot.coordinates.latitude < -90 || spot.coordinates.latitude > 90 ? <FormHelperText>Invalid latitude value</FormHelperText> : null}
</FormControl>

<FormControl>
    <InputLabel htmlFor="longitude">Longitude</InputLabel>
    <Input
        id="longitude"
        type="number"
        inputProps={{
            step: 0.00000000000000001,
            min: -180,
            max: 180,
        }}
        required
        value={spot.coordinates.longitude}
        error={spot.coordinates.longitude < -90 || spot.coordinates.longitude > 90}
        onChange={(event) => setSpot({...spot, coordinates: { ...spot.coordinates, longitude: parseFloat(event.target.value)}})}
    />
    {spot.coordinates.longitude < -180 || spot.coordinates.longitude > 180 ? <FormHelperText>Invalid longitude value</FormHelperText> : null}
</FormControl>*/
