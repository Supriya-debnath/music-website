import React from 'react';
import {useState, useEffect} from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../ServiceDetails/ServiceDetails';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch("./Data.json")
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
            
        <div>
            <h2 className="service-title">OUR SERVICES</h2>
       
        <div className="service-container">
             
           <Container className="container__style">
            <Row xs={1} sm={1} md={2} lg={3} className="g-4">
            {
                services.map(service => <Service service={service}></Service>)
            }
            </Row>
            </Container>
        </div>
        </div>

    );
};

export default Services;