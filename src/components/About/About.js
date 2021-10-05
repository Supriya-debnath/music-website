import React from 'react';
import {useState, useEffect} from 'react';
import { Container, Row } from 'react-bootstrap';
import AboutDetails from '../AboutDetails/AboutDetails';
import './About.css';

const About = () => {
    const [about, setAbout] = useState([])

    useEffect(() => {
        fetch("./AboutData.json")
        .then(res => res.json())
        .then(data => setAbout(data))
    }, [])

    return (

        <>
            <div className="about-title">
            <p>dedication Of Teaching</p>
            <h1 className="about-us">About Us</h1>
            <p>Also known as a Piano Teacher, Guitar Teacher, Vocal Teacher, <br /> or Studio Teacher, music teachers instruct students in theory <br /> and performance in a group setting or one-on-one.</p>
            </div>
             <div className="service-container">
           <Container className="container__style">
            <Row xs={1} sm={1} md={2} lg={3} className="g-4">
            {
                about.map(ab => <AboutDetails about={ab}></AboutDetails>)
            }
            </Row>
            </Container>
        </div>
        </>
    );
};

export default About;