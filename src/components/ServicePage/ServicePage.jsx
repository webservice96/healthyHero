import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Services/Service/Service';
import './ServicePage.css';
import Masonry from 'react-masonry-css'
import useAllServices from '../../hooks/useAllServices';

const ServicePage = () => {
    const [allServices] = useAllServices();
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };
    return (
        <div className="service-sec py-5" style={{ backgroundColor: '#ECFAFA' }}>
            <h2 className="mb-2 text-center">Our Healthcare Service</h2>
            <p className="mb-5 text-center"> You can choose from 8 Medicare demos made for a range of medical specialties to <br /> save your time and make it easy for you to have a website ready in no time.</p>
            <Container>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {
                        allServices.map((service) => (
                            <Service key={service.Id} service={service} />
                        ))
                    }
                </Masonry>
            </Container>
        </div>
    );
};

export default ServicePage;