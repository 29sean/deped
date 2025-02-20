import React, { useState } from "react";
import axios from "axios";
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
import Swal from "sweetalert2";
import { API_BASE_URL } from "../config";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle input change dynamically
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${API_BASE_URL}/users/login`,
        credentials
      );
      const { success, token, message } = response.data;

      if (success) {
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "Welcome back!",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          localStorage.setItem("token", token);
          window.location.href = "/admin";
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: message || "Invalid credentials",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text:
          error.response?.data?.message ||
          "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="login-bg d-flex justify-content-center align-items-center vh-100">
        <Card
          className="d-flex flex-column align-items-center p-4 card-color"
          style={{
            width: "30rem",
            height: "30rem",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
            borderRadius: "12px",
          }}
        >
          <CardImg
            src={logo}
            className="w-25 mb-3"
            style={{ alignSelf: "center" }}
          />
          <CardTitle className="fw-bold">SDO CABUYAO</CardTitle>
          <CardBody className="d-flex flex-column justify-content-center w-100">
            <Form
              className="d-flex flex-column gap-4 p-3"
              onSubmit={handleLogin}
            >
              <InputGroup>
                <InputGroup.Text>
                  <FaUserAlt />
                </InputGroup.Text>
                <FloatingLabel label="Username">
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    required
                  />
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
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
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
                type="submit"
                className="mt-3 w-100"
                style={{
                  fontSize: "1.15em",
                  backgroundColor: "#28a745",
                  borderColor: "#28a745",
                }}
                disabled={loading}
              >
                {loading ? (
                  "Logging in..."
                ) : (
                  <>
                    <FaSignInAlt className="me-2" /> Login
                  </>
                )}
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Login;
