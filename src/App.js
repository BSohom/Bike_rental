import React, {useState,useEffect} from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Feedback from './components/Feedback';
import Home from './components/Home';
import Privacy from './components/Privacy';
import Offer from './components/Offer';
import ContactUS from './components/ContactUS';
import Admin from "./components/Admin";
import Login from "./components/Login";
import Review from "./components/Review";
import FeatureBikes from "./components/FeatureBikes";
import Honda from './components/Honda';
import Tvs from "./components/Tvs";
import RoyalEnfield from "./components/RoyalEnfield";
import BookingForm from "./components/BookingForm";
import Hero from "./components/Hero";
import Suzuki from "./components/Suzuki";
import KTM from "./components/KTM";
import Bajaj from "./components/Bajaj";
import Yamaha from "./components/Yamaha";
import EV from "./components/Ev";
import Kawasaki from "./components/Kawasaki";
import BMW from "./components/BMW";
import Swal from 'sweetalert2';



function App() {

  return (
    <div className="App">

    
    <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/Home' element={<Home />}></Route>
            <Route exact path='/Offer' element={<Offer />}></Route>
            <Route exact path='/Privacy' element={<Privacy />}></Route>
            <Route exact path='/Feedback' element={<Feedback />}></Route>
            <Route exact path='/Admin' element={<Admin />}></Route>
            <Route exact path='/ContactUS' element={<ContactUS />}></Route>
            <Route exact path='/Login' element={<Login />}></Route>
            <Route exact path='/Review' element={<Review />}></Route>
            <Route exact path='/FeatureBikes' element={<FeatureBikes />}></Route>
            <Route exact path='/Honda' element={<Honda />}></Route>
            <Route exact path='/Tvs' element={<Tvs />}></Route>
            <Route exact path='/RoyalEnfield' element={<RoyalEnfield />}></Route>
            <Route exact path='/REBookingForm' element={<BookingForm />}></Route>
            <Route exact path='/Hero' element={<Hero />}></Route>
            <Route exact path='/Suzuki' element={<Suzuki />}></Route>
            <Route exact path='/KTM' element={<KTM />}></Route>
            <Route exact path='/Bajaj' element={<Bajaj />}></Route>
            <Route exact path='/Yamaha' element={<Yamaha />}></Route>
            <Route exact path='/EV' element={<EV />}></Route>
            <Route exact path='/Kawasaki' element={<Kawasaki />}></Route>
            <Route exact path='/BMW' element={<BMW />}></Route>



















          </Routes>
        </BrowserRouter>
      
    </div>
    
  );
}

export default App;
