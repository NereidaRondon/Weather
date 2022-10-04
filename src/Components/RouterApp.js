import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import BigMap from './BigMap.js';
import WeatherPage from './WeatherPage';

export default function Router() {
  
  return (  
        <Routes>
          
          <Route path='/' element={ <Home />} />
          <Route path='/weatherdashboard' element={ <WeatherPage /> } />
          <Route path='/map' element={ <BigMap /> } />
          
        </Routes>
  );
}

 
