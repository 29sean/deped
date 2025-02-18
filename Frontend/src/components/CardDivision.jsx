import React, { useState, useEffect } from "react";
import { Button, Card, CardBody, CardTitle } from "react-bootstrap";
import axios from "axios";
import { API_BASE_URL } from "../config.js";
import { Link } from "react-router-dom";
import { FaPlus, FaRegEdit, FaTrash } from "react-icons/fa";
import AddDivisionModal from "./modal/AddDivisionModal.jsx";

const CardDivision = () => {
  const [divisions, setDivisions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const fetchDivisions = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/divisions/get-divisions`
      );
      setDivisions(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching divisions:", error);
      setDivisions([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    await fetchDivisions();
  };

  const handleAlert = (message) => {
    alert(message);
  };

  useEffect(() => {
    fetchDivisions();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {divisions?.map(
              (division, index) =>
                division && (
                  <div
                    key={division.division_id || index}
                    className="col-md-4 col-sm-6 mb-3"
                  >
                    <Card className="custom-card h-100 d-flex flex-column justify-content-between text-center p-3 shadow position-relative">
                      <Link
                        to={`/divisions/${division.division_id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <CardTitle className="fw-bold fs-3 text-white text-wrap text-break">
                          {division.division_name}
                        </CardTitle>
                      </Link>
                      <CardBody className="fs-6">
                        {division.division_name}
                      </CardBody>
                      <div className="position-absolute top-0 end-0 m-2 d-flex gap-2">
                        <Button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleAlert("Edit clicked!");
                          }}
                          className="btn btn-warning btn-sm opacity-75 hover-opacity-100"
                        >
                          <FaRegEdit />
                        </Button>
                        <Button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleAlert("Delete clicked!");
                          }}
                          className="btn btn-danger btn-sm opacity-75 hover-opacity-100"
                        >
                          <FaTrash />
                        </Button>
                      </div>
                    </Card>
                  </div>
                )
            )}

            {/* Add New Division Card */}
            <div className="col-md-4 col-sm-6 mb-3">
              <Card
                className="custom-card h-100 d-flex flex-column justify-content-center align-items-center text-center p-3 shadow bg-light"
                style={{ cursor: "pointer" }}
                onClick={handleShow}
              >
                <CardBody className="fs-6 d-flex align-items-center">
                  <FaPlus size={50} className="text-white" />
                </CardBody>
              </Card>
            </div>
          </>
        )}
      </div>

      {/* Add Division Modal */}
      <AddDivisionModal
        show={showModal}
        handleClose={handleClose}
        handleSave={handleSave}
      />
    </div>
  );
};

export default CardDivision;
