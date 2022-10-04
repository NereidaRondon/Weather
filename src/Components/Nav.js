import React from 'react';
import Nav from 'react-bootstrap/Nav';
import '../components.css';
import cloud from '../images/Cloud.png';

export default function NavBar(){

    return(
        <>
            <Nav as='h4'  className='mt-0 pt-5' variant="tabs" defaultActiveKey="/home">

                <Nav.Item className=''>
                    <Nav.Link as={Link} to={href='https://nereidarondon.github.io/Weather/'}>Home</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link as={Link} to={href='https://nereidarondon.github.io/Weather/weatherdashboard'}>Dashboard</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link as={Link} to={href='https://nereidarondon.github.io/Weather/map'}>Map</Nav.Link>
                </Nav.Item>

                <img className='cloud' src={cloud} alt='sun and cloud icon'/>
                

            </Nav>
        </>
    ); 

} 
