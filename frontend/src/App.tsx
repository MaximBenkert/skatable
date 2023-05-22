import React from 'react';
import './App.css';
import useSpots from "./hooks/useSpots";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddSpot from "./components/AddSpot";
import Navigation from "./components/Navigation";
import SpotDetails from "./components/SpotDetails";
import EditSpot from "./components/EditSpot";
import SpotMapComponent from "./components/SpotMapComponent";

function App() {

    const {spot, setSpot, spots, addSpot, loadSpotByID, deleteSpot, updateSpot} = useSpots()
    const mapHeight = `calc(100vh - 54px)`;

    return (
        <main>
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        <Route path="/" element={
                                <SpotMapComponent isSpotToEdit={false} spots={spots} mapHeight={mapHeight} />
                        } />

                        <Route path="/add"
                               element={<AddSpot addSpot={addSpot} spots={spots}/>}/>
                        <Route path="/details/:id"
                               element={
                            <SpotDetails spot={spot}
                                         loadSpotById={loadSpotByID}></SpotDetails>}
                        />
                        <Route path="/edit/:id"
                               element={
                                   <EditSpot loadSpotById={loadSpotByID}
                                             updateSpot={updateSpot}
                                             spot={spot}
                                             setSpot={setSpot}
                                             spots={spots}
                                   ></EditSpot>}/>
                    </Routes>
                    <Navigation/>
                </div>
            </BrowserRouter>
        </main>

    );
}

export default App;
