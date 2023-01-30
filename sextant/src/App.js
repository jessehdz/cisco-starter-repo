import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import DataCard from './components/DataCard';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../src/components/css/Container.css';
// import  from 'react-bootstrap/Header';

function App() {

  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  const d = new Date();
  let day = weekday[d.getDay()];
  let date = d.toLocaleDateString();
  // let currentDate = date.getDay();

  return (
    <div>
        <Banner />
        <Container className='data-container'>
        <header className='h3 pt-3 px-3 mb-0'>Dashboard</header>
        <subtitle className='h6 pt-1 px-3 mb-0 text-muted subtitle-font'>{day}, {date}</subtitle>
            <Row className="justify-content-md-center px-4 my-5">
                <Col xs={12} md={4}><DataCard /></Col>
                <Col xs={12} md={4}><DataCard /></Col>
                <Col xs={12} md={4}><DataCard /></Col>
            </Row>
        </Container>
    </div>
  );
}

export default App;
