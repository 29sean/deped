import React, { useState } from "react";
import {
  Card,
  CardBody,
  Form,
  Button,
  CardImg,
  CardTitle,
  FloatingLabel,
  InputGroup,
} from "react-bootstrap";
import logo from "../assets/Images/logo.png";
import {
  FaUserAlt,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaSignInAlt,
} from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="login-bg d-flex justify-content-center align-items-center vh-100">
        <Card
          className="d-flex flex-column align-items-center p-4 card-color"
          style={{
            width: "30rem",
            height: "30rem",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)", // Stronger, darker shadow
            borderRadius: "12px", // Rounded corners
          }}
        >
          <CardImg
            src={logo}
            className="w-25 mb-3"
            style={{ alignSelf: "center" }}
          />
          <CardTitle className="fw-bold">SDO CABUYAO</CardTitle>
          <CardBody className="d-flex flex-column justify-content-center w-100">
            <Form className="d-flex flex-column gap-4 p-3">
              <InputGroup>
                <InputGroup.Text>
                  <FaUserAlt />
                </InputGroup.Text>
                <FloatingLabel label="Username">
                  <Form.Control type="text" placeholder="Username" />
                </FloatingLabel>
              </InputGroup>

              <InputGroup>
                <InputGroup.Text>
                  <FaLock />
                </InputGroup.Text>
                <FloatingLabel label="Password">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                </FloatingLabel>
                <InputGroup.Text
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: "pointer" }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </InputGroup.Text>
              </InputGroup>
              <Button
                className="mt-3 w-100"
                style={{
                  fontSize: "1.15em",
                  backgroundColor: "#28a745",
                  borderColor: "#28a745",
                }}
              >
                <FaSignInAlt className="me-2" /> Login
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Login;
