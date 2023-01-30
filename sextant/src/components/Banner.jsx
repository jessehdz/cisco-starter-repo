import React from 'react';
import './css/Banner.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Banner = () => {
    return (
        <header>
            <Navbar className="banner-style">
        <Container fluid>
          <Navbar.Brand className='text-white p-3' href="#home">
            Sextant
          </Navbar.Brand>
        </Container>
      </Navbar>
        {/* <Navbar className='banner-style ' expand='lg'>
            <Container fluid>
                <Navbar.Brand className='text-white '>Sextant</Navbar.Brand>
            </Container>
        </Navbar> */}
        
    </header>
    )
}

export default Banner;