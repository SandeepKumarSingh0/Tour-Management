import React, { useState } from 'react';
import CommonSection from '../shared/CommonSection';
import { Container, Row, Col } from 'reactstrap';

import "../styles/tour.css";
import tourData from '../assets/data/tours';
import TourCard from '../shared/TourCard';
import SearchBar from '../shared/SearchBar';
import Newslatter from '../shared/Newsletter';

// import backgroundImg from '../assets/images/tour-1.jpg';


const Tour = () => {
    const [page, setPage] = useState(0);
    const pageCount = Math.ceil(tourData.length / 4); // Assuming 8 tours per page

    return (
        <>
            <CommonSection title={"All Tours"} />
            
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <SearchBar />
                        </Col>
                    </Row>

                    <Row>
                        {tourData.slice(page * 8, (page * 8) + 8).map((tour, index) => (
                            <Col lg="4" md="6" sm="12" key={index}>
                                <TourCard tour={tour} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                                {[...Array(pageCount).keys()].map(number => (
                                    <span 
                                        key={number} 
                                        onClick={() => setPage(number)}
                                        className={number === page ? 'active' : ''}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {number + 1}
                                    </span>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Newslatter />
        </>
    );
};

export default Tour;
