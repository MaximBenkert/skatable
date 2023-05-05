import {Spot} from "../models/Spot";

type EditProps = {
    loadSpotById: (id: string) => void,
    spot: Spot
    updateSpot: (id: string, spot: Spot) => void
}

export default function EditDelivery(props: EditProps) {

}