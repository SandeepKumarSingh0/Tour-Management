import React from "react";
import './newslatter.css';

import { Container, Row, Col } from "reactstrap";
import maleTourist from '../assets/images/male-tourist (1).png';

const Newslatter = () => {
    return (
        <section className="newslatter">
            <Container>
                <Row className="align-items-center">
                    <Col lg="6">
                        <div className="newslatter__content">
                            <h2>Subscribe now to get useful traveling information</h2>
                            <p>Stay updated with our latest offers and news. Subscribe now to receive exclusive discounts and travel tips directly in your inbox.</p>
                            <div className="newslatter__form">
                                <input type="email" placeholder="Enter your email" />
                                <button className="btn newslatter__btn">Subscribe</button>
                            </div>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos expedita architecto perspiciatis nisi beatae enim.</p>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="newslatter__img">
                            <img src={maleTourist} alt="Male Tourist" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Newslatter;
