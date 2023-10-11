import React from 'react';
import styled from 'styled-components';
import useSpots from './hooks/useSpots';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddSpot from './components/AddSpot';
import Navigation from './components/Navigation/Navigation';
import SpotDetails from './components/SpotDetails';
import EditSpot from './components/EditSpot';
import SpotMapComponent from './components/SpotMapComponent';
import SpotGallery from './components/SpotGallery';
import Header from './components/Header/Header';

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 16px;
`;

const AppContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  background-color: #f5f5f5; /* Hintergrundfarbe für den Inhalt anpassen */
  border-radius: 8px; /* Abgerundete Ecken hinzufügen */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); /* Schatten hinzufügen */
  padding: 16px;
  margin-top: 16px; /* Einen Abstand nach oben hinzufügen */
`;

function App() {
    const { spot, setSpot, spots, addSpot, loadSpotByID, deleteSpot, updateSpot } = useSpots();
    const mapHeight = 'calc(100vh - 300px)';

    return (
        <Main>
            <BrowserRouter>
                <AppContainer>
                    <Header />
                    <Routes>
                        <Route
                            path="/"
                            element={<SpotMapComponent isSpotToEdit={false} spots={spots} mapHeight={mapHeight} />}
                        />
                        <Route path="/add" element={<AddSpot addSpot={addSpot} spots={spots} />} />
                        <Route path="/gallery" element={<SpotGallery spots={spots} />} />
                        <Route
                            path="/details/:id"
                            element={<SpotDetails spot={spot} loadSpotById={loadSpotByID} />}
                        />
                        <Route
                            path="/edit/:id"
                            element={
                                <EditSpot
                                    loadSpotById={loadSpotByID}
                                    updateSpot={updateSpot}
                                    spot={spot}
                                    setSpot={setSpot}
                                    spots={spots}
                                    deleteSpot={deleteSpot}
                                />
                            }
                        />
                    </Routes>
                    <Navigation />
                </AppContainer>
            </BrowserRouter>
        </Main>
    );
}

export default App;
