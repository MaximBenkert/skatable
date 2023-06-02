import {Spot} from "../models/Spot";
import SpotMapComponent from "./SpotMapComponent";
import Header from "./Header";
import Navigation from "./Navigation";

type HomepageProps = {
    isSpotToEdit: boolean,
    mapHeight: string,
    spots: Spot []
}


export default function Homepage(props: HomepageProps) {

    return (
        <div>
            <Header/>
            <SpotMapComponent spots={props.spots} isSpotToEdit={props.isSpotToEdit} mapHeight="80vh"/>
            <Navigation/>
        </div>
    )

}