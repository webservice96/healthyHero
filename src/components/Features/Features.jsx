import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Features.css';

const features = [
    {
        id: 1, title: 'Doctors Timetable', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>, content: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.'
    },
    {
        id: 2, title: 'Emergency Call', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
        </svg>, content: 'Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance to maximise offline indicators.'
    },
    {
        id: 3, title: 'Make An Appointment', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>, content: 'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.'
    }
];


const Features = () => {
    let boxNum = 0;
    return (
        <div className="features-sec section-padding">
            <Container>
                <Row>
                    {
                        features.map((feature) => (
                            boxNum++,
                            <Col key={feature.id} sm={12} md={4} className={`feature-box f-box-${boxNum}`} >
                                <div className="">
                                    <div className="feature-icon mb-2">
                                        {feature.icon}
                                    </div>
                                    <h2>{feature.title}</h2>
                                    <p>{feature.content}</p>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div >
    );
};

export default Features;