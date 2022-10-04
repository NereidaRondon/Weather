import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import BigMap from './BigMap.js';
import Dashboard from './Dashboard';

export default function Router() {
  
  return (  
        <Routes>
          <Route exact path='/home' element={ <Home />} />
          <Route path='/dashboard' element={ <Dashboard /> } />
          <Route path='/map' element={ <BigMap /> } />  
        </Routes>
  );
}

