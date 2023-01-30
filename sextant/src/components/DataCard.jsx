import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/DataCard.css'
import { ArrowDown, ArrowUp } from 'react-bootstrap-icons';

const DataCard = () => {

    // let connectionColor;
    // if (connectionSpeed > bandwidth) {
    //     connectionColor = 'green';
    // } else if (connectionSpeed < bandwidth) {
    //     connectionColor = 'red';
    // }

    // let bandwidthColor;
    // if (connectionSpeed > bandwidth) {
    //     bandwidthColor = 'green';
    // } else if (connectionSpeed < bandwidth) {
    //     bandwidthColor = 'red';
    // } else {
    //     bandwidthColor = 'green';
    // }

    return (

    <Card border='light' className='mb-3 card' >
        <Card.Header  as='h5'>User Name</Card.Header>
            <Card.Body>
            
            <Card.Subtitle className="mb-2 text-muted">User's Public IP</Card.Subtitle>
            <Row>
                <Col className="subtitle-font small">Connection Speed <ArrowDown color="red" size={12} /></Col>
                <Col className="subtitle-font small">Bandwith <ArrowUp color="green" size={12} /></Col>
                {/* <Col className="text-muted small" style={connectionColor}>Connection Speed</Col>
                <Col className="text-muted small" style={bandwidthColor}>Bandwith</Col> */}
            </Row>
            </Card.Body>
    </Card>
    )
}

export default DataCard;