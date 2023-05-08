import React from 'react';
import './App.css';
import useSpots from "./hooks/useSpots";
import SpotGallery from "./components/SpotGallery";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import AddSpot from "./components/AddSpot";
import Navigation from "./components/Navigation";
import SpotDetails from "./components/SpotDetails";
import EditSpot from "./components/EditSpot";

function App() {

    const {spot, spots, addSpot, loadSpotByID, deleteSpot, updateSpot} = useSpots()

    return (
        <main>
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <Routes>
                        <Route path="/"
                               element={<SpotGallery spots={spots}
                                                     deleteSpot={deleteSpot}/>}/>
                        <Route path="/add"
                               element={<AddSpot addSpot={addSpot}/>}/>
                        <Route path="/details/:id"
                               element={
                            <SpotDetails spot={spot}
                                         loadSpotById={loadSpotByID}></SpotDetails>}
                        />
                        <Route path="/edit/:id"
                               element={
                                   <EditSpot loadSpotById={loadSpotByID}
                                             spot={spot}
                                             updateSpot={updateSpot}
                                   ></EditSpot>}/>
                    </Routes>
                   <Navigation/>
                </div>
            </BrowserRouter>
        </main>

    );
}

export default App;
