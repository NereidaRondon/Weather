import React from 'react';
import './App.css';
import RouterApp from './Components/RouterApp.js'
import Container from 'react-bootstrap/Container';
import NavBar from './Components/Nav.js';


export default function App() {
  
  return (
    <>
      <NavBar />
      <Container fluid as='div' className='mt-4 m-auto landing'>
        <RouterApp />
      </Container>
       
    </>
   
  );
}

 
