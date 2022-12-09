import logo from './logo.svg';
// import './App.css';
// import Header from './Components/Header2';
// import Home from './Components/Home';
// import Hunting from './Components/SubComponents/Hunting';
// import MarcoPolo from './Components/SubSubComponents/HuntingFolder/MarcoPolo';

import Home from './Components/Home';

import Hunting from './Components/SubComponents/Hunting';
import Tourism from './Components/SubComponents/Tourism';
import ConservationProject from './Components/SubComponents/ConservationProject';
import AboutUs from './Components/SubComponents/AboutUs';
import MarcoPolo from './Components/SubSubComponents/HuntingFolder/MarcoPolo';
import Ibex from './Components/SubSubComponents/HuntingFolder/Ibex';
import BrownBear from './Components/SubSubComponents/HuntingFolder/BrownBear';
import WildBore from './Components/SubSubComponents/HuntingFolder/WildBore';
import GuidedTours from './Components/SubSubComponents/TourismFolder/GuidedTours';
import WildLifeTours from './Components/SubSubComponents/TourismFolder/WildLifeTours';
import FamilyTours from './Components/SubSubComponents/TourismFolder/FamilyTours';
import SnowLeopardProject from './Components/SubSubComponents/CProjectFolder/SnowLeopardProject';
import BeeKeepingProject from './Components/SubSubComponents/CProjectFolder/BeeKeepingProject';
import Lodging from './Components/SubSubComponents/Lodging';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Gallery from './moduls/gallary/Gallery';
import ContactUs from './Components/SubComponents/ContactUs';
import {Routes, Route, BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/hunting'element={<Hunting/>}/>
          <Route path='/tourism'element={<Tourism/>}/>
          <Route path='/cproject'element={<ConservationProject/>}/>
          <Route path='/aboutus'element={<AboutUs/>}/>
          <Route path='/MarcoPolo'element={<MarcoPolo/>}/>
          <Route path='/Ibex'element={<Ibex/>}/>
          <Route path='/BrownBear'element={<BrownBear/>}/>
          <Route path='/WildBore'element={<WildBore/>}/>
          <Route path='/GuidedTours'element={<GuidedTours/>}/>
          <Route path='/WildLifeTours'element={<WildLifeTours/>}/>
          <Route path='/FamilyTours'element={<FamilyTours/>}/>
          <Route path='/SnowLeopardProject'element={<SnowLeopardProject/>}/>
          <Route path='/BeeKeepingProject'element={<BeeKeepingProject/>}/>
          <Route path='/gallery'element={<Gallery/>}/>
          <Route path='/contactus'element={<ContactUs/>}/>
          <Route path='/Lodging'element={<Lodging/>}/>
          </Routes>
      </BrowserRouter> 
      <Footer/>

    </div>
  );
}

export default App;
