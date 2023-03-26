import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

const NewInventoryItem = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('quantity', quantity);
    formData.append('image', image);
    axios.post('http://localhost:3001/inventory', formData)
      .then(res => {
        console.log(res.data);
        setSuccessMsg('Item added successfully!');
      })
      .catch(err => console.log(err));
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8">
          <h1>Add New Inventory Item</h1>
          {successMsg && <Alert variant="success">{successMsg}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" placeholder="Enter quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formImage">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file"  accept="image/png, image/gif, image/jpeg" onChange={(e) => setImage(e.target.files[0])} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default NewInventoryItem;
