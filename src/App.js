import React from "react";
import './App.css';
import PlasticMap from './components/PlasticMap';
import Header from './components/Header';
// import Logo from './images/logo.png';
import Sidebar from "./components/Sidebar";

import 'react-dropdown/style.css';
const App = () => {

  return (
    <div>
      <Header/>
      <div className="container">

        <Sidebar/>
        <PlasticMap/>
      </div>

      
    </div>
  );
}

export default App;
