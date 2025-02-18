import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { API_BASE_URL } from "../../config";

const AddDivisionModal = ({ show, handleClose, handleSave }) => {
  const [divisionData, setDivisionData] = useState({
    division_name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDivisionData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!divisionData.division_name.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Division name is required!",
      });
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${API_BASE_URL}/divisions/add-division`,
        divisionData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Swal.fire({
        icon: "success",
        title: "Success",
        text: response.data.message,
      });

      handleSave();
      setDivisionData({ division_name: "", description: "" });
      handleClose();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.message || "Something went wrong",
      });
    }
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
              name="division_name"
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
