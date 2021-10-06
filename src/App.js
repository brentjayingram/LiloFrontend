import React from "react";
import './App.css';
import PlasticMap from './components/PlasticMap';
import Header from './components/Header';
import Logo from './images/logo.png';

import 'react-dropdown/style.css';
const App = () => {

  return (
    <div>
      <Header/>
      <div className="container">

      <div className="imageContainer">
          <img className="logo" src={Logo} alt="Logo" />
      <p class="text-align:center"><b>Lilo is an app for monitoring plastic
         marine debris (detected from space)</b> </p>


      <i>Lilo's data you see in the form of plastic bottles represent specific areas called eoPatches,
        which are areas of ocean or coastline where our machine learning model identified a 
        cluster of macroplastics. </i>

      <p>        <i>The data fed to our machine learning model is Sentinel 2 Satellite spectro-radiometric imagery.
        This means our model can even detect shallow submerged macroplastics. </i> </p>

        <p>        <i>You can select the date you'd like to see data from via the dropdown button above.
          Since our model takes a long time (and is expensive) to run we weren't able to share 
          all the dates we wanted to.</i> </p>
      </div>
      






        <PlasticMap/>
      </div>

      
    </div>
  );
}

export default App;
