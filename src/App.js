import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import teslaData from './data/tesla.json'

import './App.css';

function App() {

  console.log(teslaData)

  return (
    <div className="App">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {teslaData.map(tsla => (
          <Marker 
          key = {tsla.id}
          position={[tsla.gps.latitude, tsla.gps.longitude]}>

          </Marker>
        ))}


      </MapContainer>
    </div>
  );
}

export default App;
