import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle } from "react-bootstrap";
import axios from "axios";
import { API_BASE_URL } from "../config.js";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import AddDivisionModal from "./modal/AddDivisionModal.jsx";

const CardDivision = () => {
  const [divisions, setDivisions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    const fetchDivisions = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/divisions/get-divisions`
        );
        setDivisions(response.data);
      } catch (error) {
        console.error("Error fetching divisions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDivisions();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {divisions.map((division) => (
              <div
                key={division.division_id}
                className="col-md-4 col-sm-6 mb-3"
              >
                <Link
                  to={`/divisions/${division.division_id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card className="custom-card h-100 d-flex flex-column justify-content-between text-center p-3 shadow">
                    <CardTitle className="fw-bold fs-4">
                      {division.division_name}
                    </CardTitle>
                    <CardBody className="fs-6">{division.description}</CardBody>
                  </Card>
                </Link>
              </div>
            ))}

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
      <AddDivisionModal
        show={showModal}
        handleClose={handleClose}
        // handleSave={handleSave}
      />
    </div>
  );
};

export default CardDivision;
