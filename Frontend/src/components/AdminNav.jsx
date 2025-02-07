import React from "react";
import { Container, Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import navLogo from "../assets/Images/logo.png";

const AdminNav = ({ props }) => {
  return (
    <Navbar className="py-3 mb-5 bg-secondary">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Brand Logo & Name */}
        <NavbarBrand className="d-flex align-items-center gap-2">
          <img src={navLogo} width="120" height="120" alt="SDO CABUYAO Logo" />
          <span className="fw-bold fs-5 text-white">SDO CABUYAO</span>
        </NavbarBrand>
        {/* Navigation Links */}
        <Nav className="d-flex gap-3">
          <NavLink className="fs-5 text-white">Home</NavLink>
          <NavLink className="fs-5 text-white">Logout</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AdminNav;
