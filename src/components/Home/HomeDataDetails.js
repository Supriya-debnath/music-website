import React from "react";
import { Card, Col } from "react-bootstrap";
import './HomeData.css';

const HomeDataDetails = (props) => {
  const { name, description, img, price } = props.data;
  return (
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
          <p>$ <small>{price}</small> </p>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default HomeDataDetails;
