import {Coordinates} from "./Coordinates";

export type Spot = {
    id: string,
    coordinates: Coordinates,
    name: string
}

export type NewSpot = {
    coordinates: Coordinates,
    name: string
}