import React from "react";
import Slider from 'react-slick';
import './testimonials.css'
import ava01 from '../../assets/images/ava-1 (1).jpg';
import ava02 from '../../assets/images/ava-2 (1).jpg';
import ava03 from '../../assets/images/ava-3 (1).jpg';

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dolorem eaque labore omnis, rem molestiae ut sapiente aut consequuntur natus illo dolorum? Eligendi reprehenderit rem deserunt quis illum assumenda suscipit.</p>

                <div className="d-flex align-items-center gap-4">
                    <img src={ava01} className="w-25 h-25 rounded-2" alt="John Doe" />
                    <div>
                        <h5 className="mb-0 mt-3">John Doe</h5>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

            <div>
                <p>Another testimonial text goes here. This is just an example.</p>

                <div className="d-flex align-items-center gap-4">
                    <img src={ava02} className="w-25 h-25 rounded-2" alt="Jane Smith" />
                    <div>
                        <h5 className="mb-0 mt-3">Jane Smith</h5>
                        <p>Client</p>
                    </div>
                </div>
            </div>

            <div>
                <p>Yet another testimonial text. Customize as needed.</p>

                <div className="d-flex align-items-center gap-4">
                    <img src={ava03} className="w-25 h-25 rounded-2" alt="Alice Johnson" />
                    <div>
                        <h5 className="mb-0 mt-3">Alice Johnson</h5>
                        <p>Patron</p>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default Testimonials;
