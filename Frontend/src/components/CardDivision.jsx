import React from "react";
import { Card, CardBody, CardTitle } from "react-bootstrap";

const CardDivision = ({ title, text }) => {
  return (
    <Card className="custom-card h-100 d-flex flex-column justify-content-between text-center p-3 shadow">
      <CardTitle className="fw-bold fs-4">{title}</CardTitle>
      <CardBody className="fs-6">{text}</CardBody>
    </Card>
  );
};

export default CardDivision;
