//import logo from './logo.svg';
import React, { useEffect} from 'react';
//import { Switch } from '@mui/material';
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from './StateProvider.js';
import Login from './Login.js'
import Payment from './Payment.js'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51P6927SHjgiUsfiRXv2aybc8qyRbAK7a4CyoUe8UKJwNmPVESpO6sNoTjLs2uljLCbByaSKqQIn8aEil6SCeUFnJ00i2N2leKa');

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
   auth.onAuthStateChanged(authUser => {
    console.log('useris >>>',authUser)

    if(authUser){

      dispatch({
        type: 'SET_USER',
        user: authUser
      })

    }
    else{
      dispatch({
        type: 'SET_USER',
        user: null
      })


    }
   })
  }, [])

  return (
    //BEM 
  <Router>
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/payment' element={<Elements stripe={promise}> <Payment/> </Elements>}>  </Route> 
      <Route path='/Checkout' element={<Checkout/>}>  </Route>
      <Route path='/login' element={<Login />} >  </Route>
      <Route path='/' element={(<Home/>)}></Route>
     </Routes>
    </div>
  </Router>  
  );
}

export default App;
