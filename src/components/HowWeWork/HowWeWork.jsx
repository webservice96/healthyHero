import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import workLgImage from '../../assets/img/group-of-doctors.jpg';
import workSmImage from '../../assets/img/team-of-doctors-having.jpg';
import './HowWeWork.css';

const HowWeWork = () => {
    return (
        <Container className="section-padding">
            <Row className="align-self-center">
                <Col sm={12} md={7} className="pe-5">
                    <div className="how-we-work-left ">
                        <div className="work-header">
                            <h5 className="mb-3">How We Work</h5>
                            <h2 className="fs-1 mb-3">A Comprehensive Directory For Your Health Care</h2>
                            <p className="text-muted">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p>
                        </div>
                        <div className="work-boxes pt-4">
                            {/* single work box start */}
                            <div className="work-box d-flex mb-2">
                                <div className="work-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <div className="work-text ms-4">
                                    <h2 className="fs-4">Book an Appointment</h2>
                                    <p className="text-muted">Appropriately empower dynamic leadership skills after business portals. Globally myocardinate interactive supply chains with </p>
                                </div>
                            </div>
                            {/* single work box start */}
                            <div className="work-box d-flex mb-2">
                                <div className="work-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="work-text ms-4">
                                    <h2 className="fs-4">Conduct Checkup</h2>
                                    <p className="text-muted">Enthusiastically mesh long-term high-impact infrastructures vis-a-vis efficient customer service. Professionally fashion wireless leadership rather</p>
                                </div>
                            </div>
                            {/* single work box start */}
                            <div className="work-box d-flex mb-2">
                                <div className="work-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="work-text ms-4">
                                    <h2 className="fs-4">Perform Treatment</h2>
                                    <p className="text-muted">scalable e-commerce rather than high standards in e-services. Assertively iterate resource maximizing products after leading-edge intellectual capital.</p>
                                </div>
                            </div>
                            {/* single work box start */}
                            <div className="work-box d-flex mb-2">
                                <div className="work-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="work-text ms-4">
                                    <h2 className="fs-4">Prescribe & Payment</h2>
                                    <p className="text-muted">Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </Col>
                <Col sm={12} md={5}>
                    <div className="how-we-work-right">
                        <Image src={workLgImage} rounded />
                        <Image src={workSmImage} rounded />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default HowWeWork;