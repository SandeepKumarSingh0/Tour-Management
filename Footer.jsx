import React from 'react';
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from "../../assets/images/logo (1).png"; // Check if this path is correct

// Uncomment and correct these paths if the images are available
import homeLogo from "../../assets/images/home-logo.png";
import aboutLogo from "../../assets/images/about-logo.png";
import toursLogo from "../../assets/images/tours-logo.png";
import galleryLogo from "../../assets/images/gallery-logo.png";
import loginLogo from "../../assets/images/login-logo.png";
import registerLogo from "../../assets/images/register-logo.png";

const quick__links = [
    {
        path: "/home",
        display: "Home",
        logo: homeLogo, // Uncomment if the path is correct
    },
    {
        path: "/about",
        display: "About",
        logo: aboutLogo, // Uncomment if the path is correct
    },
    {
        path: "/tours",
        display: "Tours",
        logo: toursLogo, // Uncomment if the path is correct
    },
];

const quick__links2 = [
    {
        path: "/gallery",
        display: "Gallery",
        logo: galleryLogo, // Uncomment if the path is correct
    },
    {
        path: "/login",
        display: "Login",
        logo: loginLogo, // Uncomment if the path is correct
    },
    {
        path: "/register",
        display: "Register",
        logo: registerLogo, // Uncomment if the path is correct
    },
];

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="3">
                        <img src={logo} alt="Company Logo" className="footer__logo" />
                        <p>
                            We are a travel company dedicated to providing the best experience for our clients. Join us on our journeys around the world.
                        </p>
                    </Col>

                    <Col lg="3" md="6" sm="12">
                        <h5>Quick Links</h5>
                        <ListGroup className="footer__list">
                            {quick__links.map((item, index) => (
                                <ListGroupItem key={index} className="footer__item">
                                    <a href={item.path}>
                                        {/* Uncomment if the path is correct */}
                                        <img src={item.logo} alt={`${item.display} Logo`} className="footer__item-logo" />
                                        {item.display}
                                    </a>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>

                    <Col lg="3" md="6" sm="12">
                        <h5>Quick Links</h5>
                        <ListGroup className="footer__list">
                            {quick__links2.map((item, index) => (
                                <ListGroupItem key={index} className="footer__item">
                                    <a href={item.path}>
                                        {/* Uncomment if the path is correct */}
                                        <img src={item.logo} alt={`${item.display} Logo`} className="footer__item-logo" />
                                        {item.display}
                                    </a>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>

                    <Col lg="3" md="6" sm="12">
                        <h5>Contact Us</h5>
                        <p>Email: sandeepkumarsingh221011@gmail.com</p>
                        <p>Phone: +91 8572998203</p>
                        <div className="footer__social-links">
                            <a href="https://www.facebook.com"><FaFacebookF /></a>
                            <a href="https://www.twitter.com"><FaTwitter /></a>
                            <a href="https://www.instagram.com"><FaInstagram /></a>
                            <a href="https://www.linkedin.com"><FaLinkedinIn /></a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12" className="text-center mt-4">
                        <p>&copy; 2024 Travel Company. All rights reserved.</p>
                    </Col>
                </Row>
                <div className="back-to-top">
                    <a href="#top">Back to Top</a>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
