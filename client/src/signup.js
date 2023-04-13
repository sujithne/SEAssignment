
import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"

const SignupPage = () => {

  const [formErrors, setFormErrors] = useState({
    name: '',
    username: '',
    password: '',
    confirmpassword: ''
  });
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [info, setInfo] = useState('');
  const [userexists, setUserExists] = useState([]);
  let navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("info", info);
    const formIsValid = validateForm();

    if (formIsValid) {
      axios.get('http://localhost:3003/login')
        .then(res => setUserExists(res.data));
      const user = userexists.find((user) => user.username === username);

      if (user) {
        alert('Username already taken ');
        navigate(`/signup`);
      } else {
        axios.post('http://localhost:3003/login', {
          name,
          username,
          password,
          info
        }).then((response) => {
          alert("User added successfully!");
          navigate(`/login`);
        }).catch((error) => {
          console.error(error);
          alert("Error adding user. Please try again.");
        });
      }
    }
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!name) {
      formIsValid = false;
      errors.name = 'Name is required';
    }

    if (!username) {
      formIsValid = false;
      errors.username = 'Username is required';
    }

    if (!password) {
      formIsValid = false;
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      formIsValid = false;
      errors.password = 'Password must be at least 8 characters';
    }
    if (!confirmpassword) {
      formIsValid = false;
      errors.confirmpassword = 'password Does Not Match!!';
    } else if (password !== confirmpassword) {
      formIsValid = false;
      errors.confirmpassword = 'password Does Not Match!!';
    }

    setFormErrors(errors);
    return formIsValid;
  };


  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="4">
          <h1>Signup</h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} isInvalid={formErrors.name} required />
              <Form.Control.Feedback type="invalid">
                {formErrors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formQuantity">
              <Form.Label>Username</Form.Label>
              <Form.Control type="test" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} isInvalid={formErrors.username} required />
              <Form.Control.Feedback type="invalid">
                {formErrors.username}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} isInvalid={formErrors.password} required />
              <Form.Control.Feedback type="invalid">
                {formErrors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} isInvalid={formErrors.confirmpassword} required />
              <Form.Control.Feedback type="invalid">
                {formErrors.confirmpassword}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formInfo">
              <Form.Label>Info</Form.Label>
              <Form.Control type="test" placeholder="Enter Additional Information" value={info} onChange={(e) => setInfo(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={validateForm}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignupPage;
