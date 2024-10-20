import React from 'react';
import TourCard from '../../shared/TourCard'; // Keep the correct import based on your file structure
import tourData from '../../assets/data/tours';
import { Col } from 'reactstrap';


const FeaturedTourList = () => {
    return (
        <>
            {tourData?.map((tour) => {
    console.log(tour.id); // For debugging purposes
    return (
        <Col lg="3" className="mb-4" key={tour.id}>
            <TourCard tour={tour} />
        </Col>
    );
})}

        </>
    );
};


export default FeaturedTourList;

