import {NewSpot} from "../models/Spot";
import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Coordinates} from "../models/Coordinates";
import {Button, TextField} from "@mui/material";

type AddSpotProps = {
    addSpot: (newSpot: NewSpot) => void
}

export default function AddSpot(props: AddSpotProps) {
    const [name, setName] = useState<string>("")
    const [latitude, setLatitude] = useState<number>(50.941278)
    const [longitude, setLongitude] = useState<number>(6.958281)

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
        navigate("/spots")


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
                <TextField label='latitude'
                           required
                           value={latitude}
                           onChange={(event) => {
                               setLatitude(parseFloat(event.target.value))
                           }}/>
                <TextField label='longitude'
                           required
                           value={longitude}
                           onChange={(event) => {
                               setLongitude(parseFloat(event.target.value))
                           }}/>

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