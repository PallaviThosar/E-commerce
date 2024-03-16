//import logo from './logo.svg';
import React from 'react';
//import { Switch } from '@mui/material';
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    //BEM 
  <Router>
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/checkout' element={<Checkout/>}>  </Route>
      <Route path='/login' element={<Checkout />} >  </Route>
      <Route path='/' element={(<Home/>)
    }></Route>
     </Routes>
    </div>
  </Router>  
  );
}

export default App;
