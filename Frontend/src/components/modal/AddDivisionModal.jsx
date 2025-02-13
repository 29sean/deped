import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddDivisionModal = ({ show, handleClose, handleSave }) => {
  const [divisionData, setDivisionData] = useState({
    division_name: "",
    description: "",
  });

  const handleChange = (e) => {
    setDivisionData({ ...divisionData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    handleSave(divisionData);
    setDivisionData({ division_name: "", description: "" }); // Reset form fields
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add New Division</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Division Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={divisionData.division_name}
              onChange={handleChange}
              placeholder="Enter division name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={divisionData.description}
              onChange={handleChange}
              rows={3}
              placeholder="Enter description"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Division
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddDivisionModal;
