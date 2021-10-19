import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">Healthy Hero</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/appointment">Appointment</Nav.Link>
                            <Nav.Link as={Link} to="/doctorapply">Apply as a doctor</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/contatus">Contact Us</Nav.Link>
                            {user?.email ?
                                <div className="d-flex align-items-center">
                                    Welcome, {user.displayName}
                                    <Nav.Link as={Link} to="/" onClick={logOut} className="ms-2">Logout</Nav.Link>
                                </div>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;