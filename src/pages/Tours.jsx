import React, { useEffect, useState } from 'react';
import CommonSection from '../shared/CommonSection';
import '../styles/tour.css';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import tourData from '../assets/data/tours';
import { Col, Container, Row } from 'reactstrap';
import SearchBar from '../shared/SearchBar';
import TourCard from '../shared/TourCard';
import Newsletter from '../shared/Newsletter';
import Subtitle from '../shared/Subtitle';
const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    // Replace `5` with backend data count for accurate calculation
    const pages = Math.ceil(5 / 4);
    setPageCount(pages);
  }, [page]);

  return (
    <>
      <section className='common-part'>
        {/* Common Section for Title */}
        <CommonSection title="Visit Your Destination" className="title" />

        {/* Search Bar Section */}
        {<section>
          <Container>
            <Row>
              <SearchBar />
            </Row>
          </Container>
        </section>}

        {/* Tours Display Section */}
        {/*
      <section className="pt-0">
        <Container>
          <Row>
            {tourData?.map((tour) => (
              <Col lg="3" className="mb-4" key={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}
            <Col lg="12">
             
              <div className="pagination">
                {[...Array(pageCount).keys()].map((number) => (
                  <span
                    key={number}
                    onClick={() => setPage(number)}
                    className={page === number ? 'active__page' : ''}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      */}
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
        {/* Newsletter Section */}
        <Newsletter />
      </section>
    </>
  );
};

export default Tours;
