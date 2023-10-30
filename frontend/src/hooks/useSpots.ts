import {useEffect, useState} from "react";
import {NewSpot, Spot} from "../models/Spot";
import axios from "axios";
import {toast} from "react-toastify";

export default function useSpots() {

    const [spots, setSpots] = useState<Spot[]>([])
    const [spot, setSpot] = useState<Spot>({id: "", coordinates: {latitude: 0, longitude: 0}, name: ""})

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

    function loadSpotByID(id: string) {
        axios.get("/api/spots/" + id)
            .then((response) => {
                setSpot(response.data)
            })
            .catch(() => {
                toast.error("Spot not found!")
            })
    }

        function addSpot(spot: NewSpot, image: File | undefined) {

            const data = new FormData()

            if (image) {
                data.append("uploadImage", image)
            }
            data.append("json", new Blob([JSON.stringify(spot)], {"type": "application/json"}))

            axios.post("/api/spots", data)
                .then(spotAddedResponse => spotAddedResponse.data)
                .then(data => setSpots([...spots, data]))
                .catch(reason => console.error(reason))
        }

        function deleteSpot(id: string) {
        axios.delete("/api/spots/" + id)
            .then(() => {
                setSpots(spots.filter((spot) => spot.id !== id))
            })
            .catch(console.error)
        }

        function updateSpot(spot: Spot) {
        axios.put("/api/spots/" + spot.id, spot)
            .then((putSpotResponse) => {
                setSpots(spots.map(currentSpot => {
                    if (currentSpot.id === spot.id) {
                        return putSpotResponse.data
                    }
                    else {
                        return currentSpot
                    }
                }))
            })
            .catch(reason => console.error(reason))
        }

    return {spot, setSpot, spots, setSpots, addSpot, loadSpotByID, deleteSpot, updateSpot}
}