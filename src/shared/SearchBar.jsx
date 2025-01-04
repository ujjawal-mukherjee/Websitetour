/*import React, { useRef } from 'react'
import '../styles/search-bar.css'
import { Col, Form, FormGroup } from 'reactstrap'

const SearchBar = () => {

    const locationRef = useRef('')
    const distanceRef = useRef(0)
    const maxGroupSizeRef = useRef(0)

    const searchHandler = () => {
        const location = locationRef.current.value
        const distance = distanceRef.current.value  // Fix this line
        const maxGroupSize = maxGroupSizeRef.current.value  // Fix this line

        if (location === '' || distance === '' || maxGroupSize === '') {
            return alert('Please fill all fields')
        }
    }

    return (
        <Col lg='12'>
            <div className="search__bar">
                <Form className="d-flex align-items-center gap-4">
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span><i className="ri-map-pin-line"></i></span> 
                        <div>
                            <h6>Location</h6>
                            <input type="text" placeholder='Where are you going?' ref={locationRef} />
                        </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span><i className="ri-map-pin-time-line"></i></span>
                        <div>
                            <h6>Distance</h6>
                            <input type="number" placeholder='Distance k/m' ref={distanceRef} />
                        </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-3 form__group form__group-last">
                        <span><i className="ri-group-line"></i></span> 
                        <div>
                            <h6>Max People</h6>
                            <input type="number" placeholder='Maximum People' ref={maxGroupSizeRef} />
                        </div>
                    </FormGroup>
                    <span className="search__icon" type="submit" value="submit" onClick={searchHandler}>
                        <i className="ri-search-line"></i> 
                    </span>
                </Form>
            </div>
        </Col>
    )
}

export default SearchBar
*/
import React, { useRef } from 'react';
import '../styles/search-bar.css';
import { Col, Form, FormGroup } from 'reactstrap';

const SearchBar = ({ onSearch }) => {
    const locationRef = useRef('');
    const distanceRef = useRef(0);
    const maxGroupSizeRef = useRef(0);

    const searchHandler = () => {
        const location = locationRef.current.value;
        const distance = parseInt(distanceRef.current.value, 10) || 0;
        const maxGroupSize = parseInt(maxGroupSizeRef.current.value, 10) || 0;

        if (location === '' && distance === 0 && maxGroupSize === 0) {
            return alert('Please fill at least one field.');
        }

        // Pass the search criteria to the parent component
        onSearch({ location, distance, maxGroupSize });
    };

    return (
        <Col lg="12">
            <div className="search__bar">
                <Form className="d-flex align-items-center gap-4">
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span>
                            <i className="ri-map-pin-line"></i>
                        </span>
                        <div>
                            <h6>Location</h6>
                            <input
                                type="text"
                                placeholder="Where are you going?"
                                ref={locationRef}
                            />
                        </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span>
                            <i className="ri-map-pin-time-line"></i>
                        </span>
                        <div>
                            <h6>Distance</h6>
                            <input
                                type="number"
                                placeholder="Distance k/m"
                                ref={distanceRef}
                            />
                        </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-3 form__group form__group-last">
                        <span>
                            <i className="ri-group-line"></i>
                        </span>
                        <div>
                            <h6>Max People</h6>
                            <input
                                type="number"
                                placeholder="Maximum People"
                                ref={maxGroupSizeRef}
                            />
                        </div>
                    </FormGroup>
                    <span
                        className="search__icon"
                        type="submit"
                        onClick={searchHandler}
                    >
                        <i className="ri-search-line"></i>
                    </span>
                </Form>
            </div>
        </Col>
    );
};

export default SearchBar;

