import React, { useRef } from "react";
import './search-bar.css';
import { Col, Form, FormGroup } from "reactstrap";

const SearchBar = () => {
    const locationRef = useRef("");
    const distanceRef = useRef(0);
    const maxGroupSizeRef = useRef(0);

    const searchHandler = (e) => {
        e.preventDefault(); // Prevent default form submission
        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;

        // Correcting the conditional check
        if (!location || !distance || !maxGroupSize) {
            return alert("All fields are required");
        }

        // Proceed with search logic...
        console.log("Searching with:", { location, distance, maxGroupSize });
    };

    return (
        <Col lg='12'>
            <div className="search__bar">
                <Form className="d-flex align-items-center gap-4" onSubmit={searchHandler}>
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span>
                            <i className="ri-map-pin-line"></i>
                        </span>
                        <div>
                            <h6>Location</h6>
                            <input type="text" placeholder="Where are you going" ref={locationRef} />
                        </div>
                    </FormGroup>

                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span>
                            <i className="ri-map-pin-time-line"></i>
                        </span>
                        <div>
                            <h6>Distance</h6>
                            <input type="number" placeholder="Distance k/m" ref={distanceRef} />
                        </div>
                    </FormGroup>

                    <FormGroup className="d-flex gap-3 form__group form__group-last">
                        <span>
                            <i className="ri-group-line"></i>
                        </span>
                        <div>
                            <h6>Max people</h6>
                            <input type="number" placeholder="Max people" ref={maxGroupSizeRef} />
                        </div>
                    </FormGroup>

                    <span className="search__icon" onClick={searchHandler}>
                        <i className="ri-search-line"></i>
                    </span>
                </Form>
            </div>
        </Col>
    );
};

export default SearchBar;
