import {useNavigate, useParams} from "react-router-dom";
import {FormEvent, useEffect, useState} from "react";
import {Button, FormControl, FormHelperText, Input, InputLabel, TextField} from "@mui/material";
import {Spot} from "../models/Spot";

type EditProps = {
    loadSpotById: (id: string) => void,
    updateSpot: (spot: Spot) => void
    spot: Spot
}

export default function EditDelivery(props: EditProps) {
    const {id} = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState<string>("")
    const [latitude, setLatitude] = useState<number>(50.9412)
    const [longitude, setLongitude] = useState<number>(6.9582)


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
            <form onSubmit={onUpdateSpot}>
                <TextField label='name'
                           required
                           value={name}
                           onChange={(event) => {
                               setName(event.target.value)

                           }
                           }/>

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
                    {longitude < -180 || longitude > 180 ?
                        <FormHelperText>Invalid longitude value</FormHelperText> : null}
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