
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Modal, Button, Form, Container, Row, Col } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import InputGroup from 'react-bootstrap/InputGroup';
// import '../../expressSer/uploads'
import { Link } from 'react-router-dom';
import { Buffer } from 'buffer';

const InventoryList = () => {
    const [inventory, setInventory] = useState([]);
    const [imageurl, setImageUrl] = useState("");
    const [name, setName] = useState("");
    const [quantity, setQty] = useState("");
    const [iid, setIid] = useState("");

    useEffect(() => {
        axios.get('http://localhost:3003/inventory')
            .then(res => setInventory(res.data))
            .catch(err => console.log(err));
        
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3003/inventorys/${id}`)
            .then(() => {
                const updatedInventory = inventory.filter(item => item._id !== id);
                setInventory(updatedInventory);
                toast.success('Item deleted successfully');
            })
            .catch(err => console.log(err));
    };

const handleEdit = (id) => {
    // setName(id.name);
    //setQty(qty);
    axios.get(`http://localhost:3003/inventorys/${id}`).then((response) => {
        setIid(id);
        setName(response.data.name);
        setQty(response.data.quantity);
        setImageUrl(response.data.image);
    })
}
const updateItem = () => {
    axios.put(`http://localhost:3003/inventorys/${iid}`, {
        name,
        quantity,

    }).then((response) => {
        alert("Item Updated")
        window.location.reload();
        
    });
}


return (
    <div>
        <div>
            <Container>
                <div>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0-alpha1/css/bootstrap.min.css" integrity="sha512-72OVeAaPeV8n3BdZj7hOkaPSEk/uwpDkaGyP4W2jSzAC8tfiO4LMEDWoL3uFp5mcZu+8Eehb4GhZWFwvrss69Q==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0-alpha1/js/bootstrap.bundle.min.js" integrity="sha512-Sct/LCTfkoqr7upmX9VZKEzXuRk5YulFoDTunGapYJdlCwA+Rl4RhgcPCLf7awTNLmIVrszTPNUFu4MSesep5Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

                    <h1>Inventory List</h1>
                    <a href="/addItem" class="text-success"><i class="fas fa-plus-circle fa-lg"></i> Add Item</a>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Image</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inventory.map(item => (
                                <tr key={item._id}>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td><img src={`data:${item.image.contentType};base64,${Buffer.from(item.image.data).toString('base64')}`} alt={item.name} width="50" /></td>
                                    <td> <button class="text-success" onClick={() => handleEdit(item._id)}><i class="fas fa-edit fa-lg mx-1"></i></button></td>
                                    <td><button class="text-danger" onClick={() => handleDelete(item._id)}><i class="fas fa-trash fa-lg mx-1"></i></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <ToastContainer />
                </div>
            </Container>
        </div>
        <div>
            <Container>
                <Row>
                    {name && <div>
                        <p class="h2 text-center">Update Item</p>
                        <Container className='mt-3'>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                                <Form.Control
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    value={name}
                                    onChange={(event) => { setName(event.target.value) }}
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>Quantity</InputGroup.Text>
                                <Form.Control value={quantity} onChange={(event) => { setQty(event.target.value) }} />
                            </InputGroup>
                        </Container>
                        <Row>
                            <Col>
                            </Col>
                        </Row>
                        <Container className='mt-4 '>
                            <Row>
                                <Col class="text-center">
                                    {<Button variant="secondary" className='mt-5 ' size="lg" onClick={() => updateItem()} >Submit</Button>}
                                </Col>
                            </Row>

                        </Container>

                    </div>}
                </Row>
            </Container>

        </div>

    </div>  
           
          )
}
       

            
export default InventoryList;

