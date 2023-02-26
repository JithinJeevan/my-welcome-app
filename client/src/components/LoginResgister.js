/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
const LoginResgister = ({
  handleInputLogin,
  handleInputRegister,
  inputLogin,
  inputRegister,
  setInputLogin,
  setInputRegister,
  handleSubmitLogin,
  handleSubmitRegister,
  isLoading,
  setError,
  error
}) => {
  const [showRegister, setShowRegister] = useState(false);
  return (
    <>
      <Row className="d-flex flex-column justify-content-center align-items-center mt-5 px-5">
        {!showRegister ? (
          <>
            <Col className="col-lg-6 mt-5">
              <Form.Control
                placeholder="Enter Username"
                name="username"
                value={inputLogin.username}
                onChange={handleInputLogin}
              />
              <Form.Control
                placeholder="Enter password"
                type="password"
                name="password"
                className="mt-2"
                value={inputLogin.password}
                onChange={handleInputLogin}
              />
            </Col>
            <Button
              className="btn btn-primary col-lg-3 mt-2"
              onClick={handleSubmitLogin}
            >
              Login
            </Button>
            {isLoading ? <Spinner animation="border" className="mt-1" /> : null}
            <Col className="col-lg-6 d-flex justify-content-center ">
              <Form.Text>
                Not a Member?
                <a
                  href="#"
                  onClick={() => {
                    setShowRegister(true);
                    setInputRegister({ username: "", password: "" });
                    setError("")
                  }}
                >
                  Register
                </a>
              </Form.Text>
          <Form.Text className="text-danger ms-5">{error}</Form.Text>
            </Col>
          </>
        ) : (
          <>
            <Col className="col-lg-6 mt-5">
              <Form.Control
                placeholder="Enter Username"
                name="username"
                value={inputRegister.username}
                onChange={handleInputRegister}
              />
              <Form.Control
                placeholder="Enter password"
                type="password"
                name="password"
                className="mt-2"
                value={inputRegister.password}
                onChange={handleInputRegister}
              />
            </Col>
            <Button
              className="btn btn-primary col-lg-3 mt-2"
              onClick={handleSubmitRegister}
            >
              Register
            </Button>
            {isLoading ? <Spinner animation="border" className="mt-1" /> : null}
            <Col className="col-lg-6 d-flex justify-content-center ">
              <Form.Text>
                Already a Member?
                <a
                  href="#"
                  onClick={() => {
                    setShowRegister(false);
                    setInputLogin({ username: "", password: "" });
                    setError("")
                  }}
                >
                  Login
                </a>
              </Form.Text>
              <Form.Text className="text-danger ms-5">{error}</Form.Text>
            </Col>
          </>
        )}
      </Row>
    </>
  );
};

export default LoginResgister;
