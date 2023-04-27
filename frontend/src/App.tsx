import React from 'react';
import './App.css';
import useSpots from "./hooks/useSpots";
import SpotGallery from "./components/SpotGallery";

function App() {

    const {spots} = useSpots()


  return (
    <div className="App">
      <header className="App-header">
        <h1>Skate it</h1>
      </header>
        <SpotGallery spots={spots}/>


    </div>
  );
}

export default App;
