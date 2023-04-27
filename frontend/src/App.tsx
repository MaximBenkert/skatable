import React from 'react';
import './App.css';
import useSpots from "./hooks/useSpots";

function App() {

    const {spots} = useSpots()


  return (
    <div className="App">
      <header className="App-header">
        <h1>Skate it</h1>
      </header>


    </div>
  );
}

export default App;
