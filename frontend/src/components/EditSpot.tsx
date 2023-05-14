import {useNavigate, useParams} from "react-router-dom";
import {Dispatch, FormEvent, SetStateAction, useEffect} from "react";
import {Button, FormControl, FormHelperText, Input, InputLabel, TextField} from "@mui/material";
import {Spot} from "../models/Spot";
import './Form.css'

type EditProps = {
    loadSpotById: (id: string) => void,
    updateSpot: (spot: Spot) => void
    spot: Spot,
    setSpot: Dispatch<SetStateAction<Spot>>
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
            <form className="form" onSubmit={onUpdateSpot}>

                <TextField label='name'
                           value={props.spot.name}
                           onChange={(event) => props.setSpot({...props.spot, name: event.target.value})}
                />

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
                        value={props.spot.coordinates.latitude}
                        error={props.spot.coordinates.latitude < -90 || props.spot.coordinates.latitude > 90}
                        onChange={(event) => props.setSpot({...props.spot, coordinates: { ...props.spot.coordinates, latitude: parseFloat(event.target.value)}})}
                    />
                    {props.spot.coordinates.latitude < -90 || props.spot.coordinates.latitude > 90 ? <FormHelperText>Invalid latitude value</FormHelperText> : null}
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
                        value={props.spot.coordinates.longitude}
                        error={props.spot.coordinates.longitude < -180 || props.spot.coordinates.longitude > 180}
                        onChange={(event) => props.setSpot({...props.spot, coordinates: { ...props.spot.coordinates, longitude: parseFloat(event.target.value)}})}
                    />
                    {props.spot.coordinates.longitude < -180 || props.spot.coordinates.longitude > 180 ?
                        <FormHelperText>Invalid longitude value</FormHelperText> : null}
                </FormControl>


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