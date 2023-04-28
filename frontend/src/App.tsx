import React from 'react';
import './App.css';
import useSpots from "./hooks/useSpots";
import SpotGallery from "./components/SpotGallery";

function App() {

    const {spots} = useSpots()

  return (
    <div className="App">
        <h1>Skate it</h1>
        <SpotGallery spots={spots}/>
    </div>
  );
}

export default App;
