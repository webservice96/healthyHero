import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { Title, ImageUrl, Id, Shortdesc } = service;
    const permaLink = `/service/topic/${Id}`;

    return (
        <Col className="mb-3">
            <Link to={permaLink} className="service-card-link">
                <Card>
                    <Card.Img className="service-image" variant="top" src={ImageUrl} />
                    <Card.Body>
                        <Card.Title>{Title}</Card.Title>
                        <Card.Text>
                            {Shortdesc}
                        </Card.Text>
                        <Link to={permaLink}>
                            <Button variant="info">Read More</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
};

export default Service;