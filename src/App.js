import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import teslaData from './data/tesla.json'
//once we have api endpoints rename teslaData and tsla to variables more appropriate for plastic
import './App.css';

function App() {

  console.log(teslaData)
  //tsla is just a variable
  const filteredStations = teslaData.filter(tsla => tsla.address.country === "USA")


  return (
      <MapContainer
        center={[34.14418154991984, -118.11822015902482]}
        zoom={12}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {filteredStations.map((tsla) => (
          <Marker
            key={tsla.id} position={[tsla.gps.latitude, tsla.gps.longitude]}>
            <Popup position={[tsla.gps.latitude, tsla.gps.longitude]}>
              <div>
                <h2>{"Name: " + tsla.name}</h2>
                <p>{"Status: " + tsla.status}</p>
                <p>{"Number of Charging Stations: " + tsla.stallCount}</p>
              </div>
            </Popup>
          </Marker>
        ))}


      </MapContainer>
  );
}

export default App;
