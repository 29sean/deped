import React, { useState } from "react";
import { Container, Nav, Navbar, NavbarBrand, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaBars } from "react-icons/fa"; // Import hamburger icon
import navLogo from "../assets/Images/logo.png";
import "../style/adminnav.css"

const AdminNav = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Listen for screen size changes
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        localStorage.removeItem("token");
        navigate("/login"); // Redirect to login page
      }
    });
  };

  return (
    <Navbar expand="lg" className="py-3 mb-5" style={{ backgroundColor: "rgb(186,203,230)" }}>
      <Container className="d-flex justify-content-between align-items-center">
        {/* Logo */}
        <NavbarBrand className="d-flex align-items-center gap-2">
          <img src={navLogo} width="120" height="120" alt="SDO CABUYAO Logo" />
          <span className="fw-bold fs-5">SDO CABUYAO</span>
        </NavbarBrand>

        {/* Mobile: Show dropdown menu without arrow */}
        {isMobile ? (
          <NavDropdown
            title={<FaBars size={24} />} // Use icon instead of text
            id="basic-nav-dropdown"
            align="end"
            className="custom-dropdown"
          >
            <NavDropdown.Item href="/admin">Home</NavDropdown.Item>
            <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
          </NavDropdown>
        ) : (
          // Desktop: Show regular buttons
          <Nav className="d-flex gap-3">
            <Nav.Link href="/admin" className="fs-5">
              Home
            </Nav.Link>
            <Nav.Link className="fs-5 text-danger" onClick={handleLogout} style={{ cursor: "pointer" }}>
              Logout
            </Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default AdminNav;
