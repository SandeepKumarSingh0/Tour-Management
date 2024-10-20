import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import '../styles/tour-details.css';
import tourData from '../assets/data/tours';
import calculateAvgRating from '../utils/avgRating';

const TourDetails = () => {
    const { id } = useParams();

    // Find the tour based on the id from the URL params
    const tour = tourData.find(tour => tour.id === parseInt(id, 10));

    // If tour is not found, show a not found message
    if (!tour) {
        return (
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <h2>Tour not found</h2>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }

    // Destructure properties from the tour object
    const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour;
    const { totalRating, avgRating } = calculateAvgRating(reviews);

    return (
        <section>
            <Container>
                <Row>
                    <Col lg="8">
                        <div className="tour__content">
                            <img src={photo} alt={title} className="tour__image" />

                            <div className="tour__info">
                                <h2>{title}</h2>

                                <div className="d-flex align-items-center gap-5">
                                    <span className="d-flex align-items-center gap-1">
                                        <i className="ri-star-s-fill" style={{ color: "var(--secondary-color)" }}></i>
                                        {avgRating > 0 ? avgRating : "Not rated"}
                                        {totalRating > 0 && (
                                            <span> ({totalRating})</span>
                                        )}
                                    </span>

                                    {/* Add more information if needed */}
                                </div>

                                <p>{desc}</p>
                                <p>Price: ${price}</p>
                                <p>Address: {address}</p>
                                <p>City: {city}</p>
                                <p>Distance: {distance} km</p>
                                <p>Max Group Size: {maxGroupSize}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default TourDetails;
