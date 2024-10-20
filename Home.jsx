import React from 'react';
import '../styles/home.css';

import { Container, Row, Col } from 'reactstrap';
import heroImg01 from '../assets/images/hero-img01 (1).jpg';
import heroImg02 from '../assets/images/hero-img02 (1).jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world (1).png';
import experienceImg from '../assets/images/experience (1).png';
import Subtitle from './../shared/Subtitle';  // Ensure this path is correct
import SearchBar from '../shared/SearchBar';

import ServiceList from '../services/ServiceList';
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from '../components/Images-Gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newslatter from '../shared/Newsletter';
import CommonSection from '../shared/CommonSection';
// import TourDetails from './TourDetails';
// import Tours from '../pages/Tours';

const Home = () => {
    return (
        <>
            {/* ========== Hero Section Start ========== */}
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="hero__content">
                                <div className="hero__subtitle d-flex align-items-center">
                                    <Subtitle subtitle={"Know Before You Go"} />
                                    <img src={worldImg} alt="World icon" />
                                </div>
                                <h1>
                                    Traveling opens the door to creating{" "}
                                    <span className="highlight">memories</span>
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tenetur et asperiores dolorum amet rem adipisci, atque cum! Blanditiis soluta numquam error, illo perferendis quae, ea nemo mollitia iusto esse laborum. Blanditiis quos dolorem unde aliquam in doloremque magnam reprehenderit architecto eveniet repudiandae necessitatibus obcaecati omnis, suscipit ad sapiente libero?
                                </p>
                            </div>
                        </Col>

                        <Col lg='2'>
                            <div className='hero__img-box'>
                                <img src={heroImg01} alt="Hero scene 1" />
                            </div>
                        </Col>

                        <Col lg='2'>
                            <div className='hero__img-box mt-5'>
                                <img src={heroImg02} alt="Hero scene 2" />
                            </div>
                        </Col>

                        <Col lg='2'>
                            <div className='hero__img-box mt-4'>
                                <video src={heroVideo} controls alt="Hero video" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='12'>
                            <SearchBar />
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* ========== Hero Section End ========== */}

            <section>
                <Container>
                    <Row>
                        <Col lg='3'>
                            <h5 className="services__subtitle">What we serve</h5>
                            <h2 className="services__title">We offer our best services</h2>
                        </Col>
                        <ServiceList />
                    </Row>
                </Container>
            </section>

            {/* ================= Featured Tour Section Start ========== */}
            <section>
                <Container>
                    <Row>
                        <Col lg="12" className='mb-5'>
                            <Subtitle subtitle={"Explore"} />
                            <h2 className='featured__tour-title'>Our featured tour</h2>
                        </Col> 
                        <FeaturedTourList />
                        {/* <TourCard /> */}
                    </Row>
                </Container>
            </section>
            {/* ================= Featured Tour Section End ========== */}

            {/* ============ experience section start ==================== */}
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="experience__content">
                                <h3 className="subtitle">Experience</h3>
                                <h2>With all our Experience <br /> we will serve you</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    <br />
                                    Quas aliquam, his tempora inventore suscipit unde.
                                </p>
                            </div>
                            <div className="counter__wrapper d-flex align-items-center gap-5">
                                <div className='counter__box'>
                                    <span>12k+</span>
                                    <h6>Successful trips</h6>
                                </div>
                                <div className='counter__box'>
                                    <span>2k</span>
                                    <h6>Regular clients</h6>
                                </div>
                                <div className='counter__box'>
                                    <span>15</span>
                                    <h6>Years of experience</h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg='6'>
                            <div className="experience__img">
                                <img src={experienceImg} alt="Experience" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* ============ experience section end ==================== */}

            {/* ============= gallery section start ============== */}
            <Container>
                <Row>
                    <Col lg="12">
                        <Subtitle subtitle={"Gallery"} />
                        <h2 className="gallery__title">
                            Visit our customers tour gallery
                        </h2>
                    </Col>
                    <MasonryImagesGallery />
                </Row>
            </Container>
            {/* =============== gallery section end ==================== */}


            {/* ================testimonial section start =============================== */}
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <Subtitle subtitle="Fans Love" />
                            <h2 className="testimonial__title">What Our Clients Say About Us</h2>
                        </Col>
                        <Col lg='12'>
                            <Testimonials />
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* ================testimonial section end =============================== */}
            <Newslatter />
            
            
            {/* ==============================Part 2 ============== */}

            <CommonSection/>
            {/* <Tours /> */}

            {/* <TourDetails/> */}


        </>
    );
}

export default Home;
