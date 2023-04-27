import {useEffect, useState} from "react";
import {Spot} from "../models/Spot";
import axios from "axios";

export default function useSpots() {

    const [spots, setSpots] = useState<Spot[]>([])

    useEffect(() => {
        loadAllSpots()
    }, [])

    function loadAllSpots() {
        axios.get("/api/spots")
            .then((getAllSpotsResponse) => {
                setSpots(getAllSpotsResponse.data)
            })
            .catch((error) => {console.error(error)})

    }
    return {spots}
}