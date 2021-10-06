import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup } from 'react-leaflet';
import { Icon } from "leaflet";
import axios from 'axios';
//plastic is just a variable
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const options = [
    '2019-04-29', '09-22-21', '09-29-21'
  ];
const defaultOption = options[2];
const baseURL = "https://vud0da6u2c.execute-api.us-east-2.amazonaws.com/beta/plasticdata/";

// function MyComponent({lat, long}) {
//   const map = useMapEvent('click', () => {
//     console.log(lat)
//   console.log(long)
//   map.setCenter([50.5, 30.5])
// })
// return null
// }

const PlasticMap = () => {


  const [plasticObj, setPlasticObject] = React.useState(null);
  const [date, setDate] = React.useState("09-29-21");
  //const { date, setDate } = useSharedFormState();
  //console.log(date)
  React.useEffect(() => {
    console.log("MAKING API CALL")
    axios.get(baseURL + date).then((response) => {
      console.log(response.data)
      console.log(response.data["date"])
      console.log(response.data["plastic_cluster_data"])
      setPlasticObject(response.data);
    });
  }, [date] //MAKE SURE TO ADD DATE HERE OR ELSE USE EFFECT AND THE API IS CALLED A BUNCH WTF
  //REACT IS BAD
  );
 
  if (!plasticObj) {
    return null;
  }
  const _onSelect = (option) => {
    console.log('You selected ', option.label)
    //const { date, setDate } = useSharedFormState();
    //setDate(option.label)
    var newDate = option.label
    console.log("new date! " + newDate)
    setDate(newDate)
    axios.get(baseURL + newDate).then((response) => {
      console.log(response.data)
      console.log(response.data["date"])
      console.log(response.data["plastic_cluster_data"][0])
      center = [response.data["plastic_cluster_data"][0]["lat"], response.data["plastic_cluster_data"][0]["long"]]
      setPlasticObject(response.data);

    });
  }

  return (
    <div>
  <Dropdown options={options} onChange={_onSelect} value={defaultOption} placeholder="Select an option" />
    <MapContainer zoomControl={false} center={center} zoom={5} scrollWheelZoom={true}>
    {/* <MyComponent lat={targetLat} long={targetLong}/> */}

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

          {plasticObj["plastic_cluster_data"].filter(plast => !plast.description.includes("0.000")).map((plastic, i) => (

               <Marker
                key={i}
                position={[plastic["lat"], plastic["long"]]}
                icon={bottle}
              >
                <Popup position={[plastic.lat, plastic.long]}>
                  <div>
                    <h2>{"Size: " + plastic.description}</h2>
                    <h2>{"Latitude: " + plastic.lat}</h2>
                    <h2>{"Longitude: " + plastic.long}</h2>
                    <h2>{"Time: " + plastic.timestamp}</h2>
                  </div>
                </Popup>
 
              </Marker> 
 
              ))}
          </LayerGroup>
        </LayersControl.Overlay>
      </LayersControl>

    </MapContainer>
    </div>
  );
}
 
export default PlasticMap;
 
 
    //layers locations
     var center = [28.807703,-50.194370]
 
    //bottle marker size on map
    const bottle = new Icon({
      iconUrl: '/bottle.png',
      iconSize: [25, 40]
    });
 
    // console.log(plasticData)