import React, { useState } from 'react';
import '../styles/login.css';
import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import registerImg from '../assets/images/Signup1.jpg';
import userIcon from '../assets/images/user1.png';

const Register = () => {
  const [credentials, setCredentials] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(credentials);  // Check if credentials are correctly populated
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const result = await response.json();
      console.log(response);  // Check response status and headers
      console.log(result);     // Check response body

      if (response.ok) {
        alert("Registration successful!");
        // Optionally redirect to the login page
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="signup__img">
                <img src={registerImg} alt="login" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="user" />
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      id="userName"
                      placeholder="Username"
                      required
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      required
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                      required
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                  >
                    Create Account
                  </Button>
                </Form>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
