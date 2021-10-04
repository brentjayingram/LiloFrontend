import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup } from 'react-leaflet';
import { Icon } from "leaflet";
import plasticData from '../data/tesla.json';
import axios from 'axios';

const baseURL = "https://vud0da6u2c.execute-api.us-east-2.amazonaws.com/beta/plasticdata/09-22-21";
//plastic is just a variable
const filteredStations = plasticData.filter(date=> date.description === "small")


console.log(plasticData)

export default function PlasticMap() {
  const [date, setDates] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setDates(response.data);
      // console.log(response.data);
    });
  }, []);

  if (!date) return null;

  return (
    
    <MapContainer zoomControl={false} center={center} zoom={10} scrollWheelZoom={true}>
      {/* different map types */}
      <LayersControl position="bottomright">
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
          {filteredStations.map((date) => (

               <Marker
                key={date.id}
                position={[date.lat, date.long]}
                icon={bottle}
              >
                <Popup position={[date.lat, date.long]}>
                  <div>
                    <h2>{"size: " + date.description}</h2>
                    
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



   
    //layers locations
     const center = [34.14418154991984, -118.11822015902482]
    
    //bottle marker size on map
    const bottle = new Icon({
      iconUrl: '/bottle.png',
      iconSize: [25, 40]
    });
  
    // console.log(plasticData)



    
  
  
