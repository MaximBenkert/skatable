import React from 'react';
import './App.css';
import useSpots from "./hooks/useSpots";
import SpotGallery from "./components/SpotGallery";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import AddSpot from "./components/AddSpot";
import Navigation from "./components/Navigation";
import SpotDetails from "./components/SpotDetails";

function App() {

    const {spot, spots, addSpot, loadSpotByID} = useSpots()

    return (
        <main>

            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <Routes>
                        <Route path="/"
                               element={<SpotGallery spots={spots}/>}/>
                        <Route path="/add"
                               element={<AddSpot addSpot={addSpot}/>}/>
                        <Route path="/details/:id"
                               element={
                            <SpotDetails spot={spot}
                                         loadSpotById={loadSpotByID}></SpotDetails>}
                        />

                    </Routes>

                   <Navigation/>

                </div>


            </BrowserRouter>


        </main>

    );
}

export default App;
