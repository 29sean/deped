import React from "react";
import CardDivision from "../components/CardDivision";
import { Row, Col, Card } from "react-bootstrap";
import AdminNav from "../components/AdminNav";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import axios from "axios";

const AdminDashboard = () => {
  return (
    <>
      <div className="admin-bg">
        <AdminNav />
        <CardDivision />
      </div>
    </>
  );
};

export default AdminDashboard;
