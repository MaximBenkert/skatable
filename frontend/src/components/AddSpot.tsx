import {NewSpot} from "../models/Spot";
import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Coordinates} from "../models/Coordinates";
import {Button, FormControl, FormHelperText, Input, InputLabel, TextField} from "@mui/material";

type AddSpotProps = {
    addSpot: (newSpot: NewSpot) => void
}

export default function AddSpot(props: AddSpotProps) {
    const [name, setName] = useState<string>("")
    const [latitude, setLatitude] = useState<number>(50.9412)
    const [longitude, setLongitude] = useState<number>(6.9582)

    const navigate = useNavigate()


    function onSaveSpot(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (name === undefined || name === "") {
            console.error("name required")
            return
        }
        const coordinates: Coordinates = {latitude, longitude}
        const newSpot: NewSpot = {coordinates, name}
        props.addSpot(newSpot)
        navigate("/")


    }

    return (
        <div>
            <form onSubmit={onSaveSpot}>
                <TextField label='name'
                           required
                           value={name}
                           onChange={(event) => {
                               setName(event.target.value)
                           }}/>


                <FormControl>
                    <InputLabel htmlFor="latitude">Latitude</InputLabel>
                    <Input
                        id="latitude"
                        type="number"
                        inputProps={{
                            step: 0.0001,
                            min: -90,
                            max: 90,
                        }}
                        required
                        value={latitude}
                        error={latitude < -90 || latitude > 90}
                        onChange={(event) => setLatitude(parseFloat(event.target.value))}
                    />
                    {latitude < -90 || latitude > 90 ? <FormHelperText>Invalid latitude value</FormHelperText> : null}
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="longitude">Longitude</InputLabel>
                    <Input
                        id="longitude"
                        type="number"
                        inputProps={{
                            step: 0.0001,
                            min: -180,
                            max: 180,
                        }}
                        required
                        value={longitude}
                        error={longitude < -180 || longitude > 180}
                        onChange={(event) => setLongitude(parseFloat(event.target.value))}
                    />
                    {longitude < -180 || longitude > 180 ? <FormHelperText>Invalid longitude value</FormHelperText> : null}
                </FormControl>


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