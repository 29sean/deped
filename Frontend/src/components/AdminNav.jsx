import React from "react";
import { Container, Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import navLogo from "../assets/Images/logo.png";

const AdminNav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token"); // Clear token
        navigate("/login"); // Redirect to login page
      }
    });
  };

  return (
    <Navbar
      className="py-3 mb-5"
      style={{ backgroundColor: "rgb(186,203,230)" }}
    >
      <Container className="d-flex justify-content-between align-items-center ">
        {/* Brand Logo & Name */}
        <NavbarBrand className="d-flex align-items-center gap-2 ">
          <img src={navLogo} width="120" height="120" alt="SDO CABUYAO Logo" />
          <span className="fw-bold fs-5 ">SDO CABUYAO</span>
        </NavbarBrand>
        {/* Navigation Links */}
        <Nav className="d-flex gap-3 ">
          <NavLink href="/admin" className="fs-5 text-dark">
            Home
          </NavLink>
          <NavLink
            className="fs-5 text-dark"
            onClick={handleLogout}
            style={{ cursor: "pointer" }}
          >
            Logout
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AdminNav;
