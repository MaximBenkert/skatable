import {NewSpot} from "../models/Spot";
import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Coordinates} from "../models/Coordinates";
import {Button, TextField} from "@mui/material";

type AddSpotProps = {
    addSpot: (newSpot: NewSpot) => void
}

export default function AddSpot(props: AddSpotProps) {
    const [name, setName] = useState<string> ("")

    const navigate = useNavigate()





    function onSaveSpot(event: FormEvent<HTMLFormElement>){
        event.preventDefault()

        if (name === undefined || name === "") {
            console.error("name required")
            return
        }
        const coordinates: Coordinates = {latitude: 34.9888, longitude: 54.7858}
        const newSpot: NewSpot = {coordinates: coordinates, name: name}
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
                <Button className='mybutton' variant='contained' color="success" type='submit'>Save</Button>

            </form>
        </div>
    )

}