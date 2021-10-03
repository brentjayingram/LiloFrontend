import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup } from 'react-leaflet';
import { Icon } from "leaflet";
import teslaData from './data/tesla.json'
//once we have api endpoints rename teslaData and tsla to variables more appropriate for plastic
import './App.css';

function App() {

  console.log(teslaData)
  //tsla is just a variable
  const filteredStations = teslaData.filter(tsla => tsla.address.country === "USA")
//layers locations
  const center = [34.14418154991984, -118.11822015902482]

  const bottle = new Icon({
    iconUrl: '/bottle.png',
    iconSize: [25, 40]
  });

  return (


    <MapContainer center={center} zoom={10} scrollWheelZoom={true}>
      {/* different map types */}
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="Default">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Black and White">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors <div>Icon made from <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is licensed by CC BY 3.0</div>'
            url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Dark Mode">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Water Color">
          <TileLayer
            attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
          />
        </LayersControl.BaseLayer>
        {/* Toggle the plastic trash and map over them */}
        <LayersControl.Overlay checked name="Plastic Trash">
          <LayerGroup>
            {filteredStations.map((tsla) => (
              <Marker
                key={tsla.id}
                position={[tsla.gps.latitude, tsla.gps.longitude]}
                icon={bottle}
              >
                <Popup position={[tsla.gps.latitude, tsla.gps.longitude]}>
                  <div>
                    <h2>{"Name: " + tsla.name}</h2>
                    <p>{"Status: " + tsla.status}</p>
                    <p>{"Number of Charging Stations: " + tsla.stallCount}</p>
                  </div>
                </Popup>
                
              </Marker>
            ))}
          </LayerGroup>
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
}

export default App;
