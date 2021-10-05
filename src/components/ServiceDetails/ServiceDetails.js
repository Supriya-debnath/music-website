import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col } from "react-bootstrap";
import './ServiceDetails.css';

const ServiceDetails = (props) => {
  console.log(props.service);
  const { name, description, img } = props.service;
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
          <Card.Text>{description}</Card.Text>
          <Button className="service-btn">read now</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceDetails;
