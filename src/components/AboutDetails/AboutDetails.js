import React from "react";
import {Col, Card} from 'react-bootstrap';

const AboutDetails = (props) => {
  const { name, img, description } = props.about;
  return (
    <>
      <Col>
        <Card className="shadow mb-4">
          <div className="d-flex align-items-center p-2">
            <Card.Img
              className="w-100 pt-3"
              style={{ objectFit: "contain", height: "300px" }}
              variant="top"
              src={img}
            />
          </div>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default AboutDetails;
