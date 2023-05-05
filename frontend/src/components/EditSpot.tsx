import {NewSpot, Spot} from "../models/Spot";
import {useNavigate, useParams} from "react-router-dom";
import {FormEvent, useEffect, useState} from "react";
import {Button, FormControl, FormHelperText, Input, InputLabel, TextField} from "@mui/material";

type EditProps = {
    loadSpotById: (id: string) => void,
    spotToUpdate: Spot
    updateSpot: (newSpot: Spot) => void
}

export default function EditDelivery(props: EditProps) {
    const {id} = useParams();
    const navigate = useNavigate();
    const initialState: Spot = props.spotToUpdate
    const [newSpot, setNewSpot] = useState <Spot>(initialState)

    useEffect(() => {
        if (id) {
            props.loadSpotById(id);
        }
        //eslint-disable-next-line
    }, [id])

    function onUpdateSpot (event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if(id) {props.updateSpot(newSpot)}
        navigate("/")
    }


    return (
        <div>
            <form onSubmit={onUpdateSpot}>
                <TextField label='name'
                           required
                           value={newSpot.name}
                           onChange={(event) => {
                               setNewSpot.name(event.target.value)
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
                        value={newSpot.coordinates.latitude}
                        error={latitude < -90 || latitude > 90}
                        onChange={(event) => setNewSpot.name(parseFloat(event.target.value))}
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
                        value={newSpot.coordinates.longitude}
                        error={longitude < -180 || longitude > 180}
                        onChange={(event) => setNewSpot.(parseFloat(event.target.value))}
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