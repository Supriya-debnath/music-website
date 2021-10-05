import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import HomeDataDetails from './HomeDataDetails';
import './HomeData.css';

const HomeData = () => {

    const [HomeData, setHomeData] = useState([]);

  useEffect(() => {
    fetch("./HomeData.json")
      .then((res) => res.json())
      .then((data) => setHomeData(data));
  }, []);

  return (
    <div>
      <h5 className="title">Dedication Of Teaching</h5>
      <div className="home-container">
        <Container className="container__style">
          <Row xs={1} sm={1} md={2} lg={4} className="g-4">
            {HomeData.map((data) => (
              <HomeDataDetails data={data}></HomeDataDetails>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomeData;