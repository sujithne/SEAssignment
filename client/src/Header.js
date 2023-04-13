import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const handleLogout = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('userEmail')
        navigate('/')
    }
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}>
            <Navbar bg="dark" variant="dark" expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            {
                                !token ? 
                                <Nav.Link as={Link} to='/api'>API</Nav.Link>
                                :
                                <>
                                <Nav.Link as={Link} to='/inventory'>Inventory</Nav.Link>
                                 {/* <Nav.Link onClick={handleLogout}>Logout</Nav.Link>  */}
                                </>
                            }
                            
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;