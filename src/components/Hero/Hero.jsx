import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import heroBG from '../../assets/img/banner-bg.jpg';
import heroContentGB from '../../assets/img/bg-health.jpg';
import './Hero.css';

const Hero = () => {
    return (
        <>
            <div className="hero-sec section-padding" style={{ backgroundImage: `url(${heroBG})` }}>
                <Container>
                    <Row>
                        <Col md={6} sm={12}>
                            <div className="banner-text" style={{ backgroundImage: `url(${heroContentGB})` }}>
                                <h1>Best Medical & Healthcare Service For Your Family</h1>
                                <p>Dynamically target high-payoff intellectual capital for customized technologies. Objectively integrate emerging core competencies.</p>
                                <Link to="/contatus"><Button className="health-btn-dark">Contact Us</Button></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Hero;