import {useEffect, useState} from "react";
import {NewSpot, Spot} from "../models/Spot";
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
            .catch(reason => console.error(reason))
    }

        function addSpot(spot: NewSpot) {
            axios.post("/api/spots", spot)
                .then(spotAddedResponse => spotAddedResponse.data)
                .then(data => setSpots([...spots, data]))
                .catch(reason => console.error(reason))
        }

    return {spots, addSpot}
}