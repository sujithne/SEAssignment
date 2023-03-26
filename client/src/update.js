import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const EditInventoryItem = (props) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    axios.get(`http://18.210.66.126:3003/inventorys/${props.match.params.id}`)
      .then(res => {
        setName(res.data.name);
        setQuantity(res.data.quantity);
      })
      .catch(err => console.log(err));
  }, [props.match.params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedItem = {
      name: name,
      quantity: quantity
    };
    axios.put(`http://18.210.66.126:3003/inventorys/${props.match.params.id}`, updatedItem)
      .then(res => {
        console.log(res.data);
        props.history.push('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8">
          <h1>Edit Inventory Item</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" placeholder="Enter quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
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

export default EditInventoryItem;
