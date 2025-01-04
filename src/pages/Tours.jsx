import React, { useEffect, useState } from 'react';
import CommonSection from '../shared/CommonSection';
import '../styles/tour.css';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
//import tourData from '../assets/data/tours';
import tours from '../assets/data/tours';
import { Col, Container, Row } from 'reactstrap';
import SearchBar from '../shared/SearchBar';
import TourCard from '../shared/TourCard';
import Newsletter from '../shared/Newsletter';
import Subtitle from '../shared/Subtitle';
const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [filteredTours, setFilteredTours] = useState(tours);

  useEffect(() => {
    // Replace `5` with backend data count for accurate calculation
    const pages = Math.ceil(5 / 4);
    setPageCount(pages);
  }, [page]);
  const handleSearch = (criteria) => {
    const { location, distance, maxGroupSize } = criteria;

    const filtered = tours.filter((tour) => {
      const matchesLocation =
        location === '' || tour.title.toLowerCase().includes(location.toLowerCase());
      const matchesDistance =
        distance === 0 || parseInt(tour.price, 10) <= distance;
      const matchesMaxGroupSize =
        maxGroupSize === 0 || maxGroupSize <= 10; // Adjust as needed

      return matchesLocation && matchesDistance && matchesMaxGroupSize;
    });

    setFilteredTours(filtered);
  };

  return (
    <>
      {/*
      <section className='common-part'>
        {<section>
          <Container>
            <Row>
              <SearchBar />
            </Row>
          </Container>
        </section>*/}
      <section className="common-part">
        {/* Search Bar Section */}
        <section>
          <Container>
            <Row>
              <SearchBar onSearch={handleSearch} />
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg="12" className="mb-5">
                <Subtitle subtitle={'Explore'} />
                <h2 className="featured__tour-title">Our featured tours</h2>
              </Col>
              <FeaturedTourList />
            </Row>
          </Container>
        </section>
        <Newsletter />
      </section>
    </>
  );
};

export default Tours;
