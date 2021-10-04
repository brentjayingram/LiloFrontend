import React from 'react';
import './App.css';
import PlasticMap from './components/PlasticMap';
import Header from './components/Header';
import Logo from './images/logo.png';


function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <div className="imageContainer">
          <img className="logo" src={Logo} alt="Logo" />
        </div>
        <PlasticMap/>
      </div>
      
    </div>
  );
}

export default App;
