import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Footer.css';
const Footer = () => {
    return (
        <footer className="site-footer">
            <Container>
                <Row>
                    <Col sm={12} md={4} className="pe-5">
                        <h2 className="text-light">Healthy Hero</h2>
                        <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>
                    </Col>
                    <Col sm={12} md={4}>
                        <h5 className="text-light mb-3">Contact Details</h5>
                        <ul className="footer-contact ms-4">
                            <li className="text-light">Jl. Raya Kuta No.70, Kuta</li>
                            <li className="text-light">support@domain.com</li>
                            <li className="text-light">8 AM - 5 PM , Monday - Saturday</li>
                            <li className="text-light">(+021) 2336 278</li>
                        </ul>
                    </Col>
                    <Col sm={12} md={4}>
                        <h5 className="text-light mb-3">Other Pages</h5>
                        <ul className="footer-contact ms-4">
                            <li><Link className="text-light" to="/">Home</Link></li>
                            <li><Link className="text-light" to="/services">Services</Link></li>
                            <li><Link className="text-light" to="/appointment">Appointment</Link></li>
                            <li><Link className="text-light" to="/contactus">Contact</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;