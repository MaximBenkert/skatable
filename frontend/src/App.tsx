import React from 'react';
import './App.css';
import useSpots from "./hooks/useSpots";
import SpotGallery from "./components/SpotGallery";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import AddSpot from "./components/AddSpot";
import Footer from "./components/Navigation"

function App() {

    const {spots, addSpot} = useSpots()

    return (
        <main>

            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <Routes>
                        <Route path="/spots"
                               element={<SpotGallery spots={spots}/>}/>
                        <Route path="/spots/add"
                               element={<AddSpot addSpot={addSpot}/>}/>

                    </Routes>

                    <Footer></Footer>

                </div>


            </BrowserRouter>


        </main>

    );
}

export default App;
