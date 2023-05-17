import React from 'react';
import './App.css';
import useSpots from "./hooks/useSpots";
import SpotGallery from "./components/SpotGallery";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddSpot from "./components/AddSpot";
import Navigation from "./components/Navigation";
import SpotDetails from "./components/SpotDetails";
import EditSpot from "./components/EditSpot";
import SpotMap from "./components/SpotMap";

function App() {

    const {spot, setSpot, spots, setSpots, addSpot, loadSpotByID, deleteSpot, updateSpot} = useSpots()

    return (
        <main>
            <BrowserRouter>
                <div className="App">
                    <Routes>

                        <Route path="/"
                               element={<div><SpotMap spots={spots}
                                                       />
                                   <SpotGallery spots={spots}
                                                deleteSpot={deleteSpot} /></div>} />



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
                                             setSpots={setSpots}
                                   ></EditSpot>}/>
                    </Routes>
                   <Navigation/>
                </div>
            </BrowserRouter>
        </main>

    );
}

export default App;
