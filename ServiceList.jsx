import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import weatherImg from '../assets/images/weather (1).png';
import guidImg from '../assets/images/guide (1).png';
import coustomizationImg from '../assets/images/customization (1).png';

const serviceData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
        imgUrl: guidImg,
        title: "Best Tour Guide",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
        imgUrl: coustomizationImg,
        title: "Customization",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
];

const ServiceList = () => {
    return (
        <>
            {serviceData.map((item, index) => (
                <Col lg="3" key={index}>
                    <ServiceCard item={item} />
                </Col>
            ))}
        </>
    );
}

export default ServiceList;
