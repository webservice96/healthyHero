import React, { useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const SingleService = () => {
    const [singleServices, setSingleService] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { topicId } = useParams();
    useEffect(() => {
        fetch(`https://health.gov/myhealthfinder/api/v3/topicsearch.json?TopicId=${topicId}`)
            .then(res => res.json())
            .then(data => {
                setSingleService(data.Result.Resources.Resource[0]);
                setIsLoading(false);
            });

    }, []);

    const { Title, ImageUrl, Sections } = singleServices;
    const details = Sections?.section;

    if (isLoading) {
        return (
            <Container className="py-5">
                <h4>Loading...</h4>
            </Container>
        );
    };

    return (
        <Container className="py-5">
            <Card>
                <Card.Img className="single-image" variant="top" src={ImageUrl} />
                <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                    {
                        details.map((detail) => (
                            <div dangerouslySetInnerHTML={{ __html: `<h4>${detail.Title}</h4>` + detail.Content }} />
                        ))
                    }
                </Card.Body>
            </Card>
        </Container>
    );
};

export default SingleService;