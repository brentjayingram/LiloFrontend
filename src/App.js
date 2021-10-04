import React from 'react';
import './App.css';
import PlasticMap from './components/PlasticMap';
import Header from './components/Header';
import logo from './images/logo.png'


function App() {
  return (
    <div>
      <Header/>
      <div className="test">
        <img className="logo" src={logo} alt="Logo" />
        <PlasticMap/>
      </div>
      
    </div>
  );
}

export default App;
