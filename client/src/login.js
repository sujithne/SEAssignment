
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import {useNavigate} from "react-router-dom"

const LoginPage = () => {
  const [formErrors, setFormErrors] = useState({
    username: '',
    password: ''
  });
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3003/login')
        .then(res => setLogin(res.data))
        .catch(err => console.log(err));
    
}, []);
const handleUsernameChange = (e) => {
  setUsername(e.target.value);
};

const handlePasswordChange = (e) => {
  setPassword(e.target.value);
};

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = login.find((user) => user.username === username && user.password === password);

    if (user) {
      // navigate to user dashboard page with username parameter
      alert('login successfull');
      navigate(`/userdashboard?username=${user.username}&name=${user.name}&info=${user.info}`);
      window.location.reload();
    } else {
      alert('Invalid username or password.');
    }
  }
  
  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!username) {
      formIsValid = false;
      errors.username = 'Enter User Name';
    }

    if (!password) {
      formIsValid = false;
      errors.password = 'Enter Password';
    }

    setFormErrors(errors);
    return formIsValid;
  };

  
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="4">
          <h1>LogIn</h1>
          
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formQuantity">
              <Form.Label>Username</Form.Label>
              <Form.Control type="test" placeholder="Enter Username" value={username}  onChange={handleUsernameChange} isInvalid={formErrors.username} required />
              <Form.Control.Feedback type="invalid">
                {formErrors.username}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password"value={password} onChange={handlePasswordChange} isInvalid={formErrors.password} required />
              <Form.Control.Feedback type="invalid">
                {formErrors.password}
              </Form.Control.Feedback>
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

export default LoginPage;
