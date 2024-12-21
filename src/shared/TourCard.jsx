/*import React from 'react'
import '../styles/tour-card.css'
import { Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import calculateAvgRating from '../utils/avgRating'
import { Star } from 'lucide-react';
const TourCard = ({ tour }) => {
  const { id, title, city, photo, price, featured, reviews } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews)

  return (
    <div className='tour__card'>
      <Card>
        <div className="tour__img">
          <img src={photo} alt="tour-img" />
          {featured && <span>Featured</span>}
        </div>
        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className='tour__location d-flex align-items-center gap-1'>
              <i className="ri-map-pin-line"></i> {city}
            </span>
            <span className='tour__rating d-flex align-items-center gap-1'>
              <i className="ri-star-fill"></i>{avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? ('Not rated') : (
                <span>({reviews.length})</span>
              )}
            </span>
          </div>
          <h5 className='tour__title'><Link to={`/tours/${id}`}>{title}</Link></h5>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>${price} <span>/per person</span></h5>
            <button className="btn booking__btn">
              <Link to={`/tours/${id}`}>Book Now</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default TourCard

*/
/*
import React from 'react'
import '../styles/tour-card.css'
import { Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import calculateAvgRating from '../utils/avgRating'
import { Star } from 'lucide-react';

const TourCard = ({ tour }) => {
  const { id, title, city, photo, price, featured, reviews } = tour;

  // Calculate average rating
  const calculateAvgRating = (reviews) => {
    const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);
    const avgRating = totalRating / (reviews?.length || 1);
    return {
      totalRating: totalRating || 0,
      avgRating: avgRating || 0,
    };
  };

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <div className="flexbox">
      <div className="card-container">
       
        <div className="card-image-container">
          <img src={photo} alt={title} className="card-image" />
          {featured && <span className="card-featured-badge">Featured</span>}
        </div>

       
        <div className="card-content">
         
          <div className="card-row">
            <span className="card-location">
              <svg
                className="card-location-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {city}
            </span>
            <div className="card-rating">
              {avgRating > 0 ? (
                <>
                  <Star className="card-star" />
                  <span className="card-rating-text">
                    {avgRating.toFixed(1)} ({reviews.length})
                  </span>
                </>
              ) : (
                <span className="card-rating-not-rated">Not rated</span>
              )}
            </div>
          </div>

          <h3 className="card-title">
            <Link to={`/tours/${id}`} className="no-underline">
              {title}
            </Link>
          </h3>


          <div className="card-price-book-row">
            <div className="card-price">
              ${price} <span className="card-price-details">/per person</span>
            </div>
            <Link to={`/tours/${id}`} className="card-book-button">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
*/
import React from "react";
import "../styles/tour-card.css";

const TourCard = ({ tour }) => {
  return (
    <div className="tour-card">
      <img src={tour.image} alt={tour.title} className="tour-card-image" />
      <div className="tour-card-content">
        <h3>{tour.title}</h3>
        <p>{tour.description}</p>
        <p className="tour-card-price">${tour.price}</p>
      </div>
    </div>
  );
};

export default TourCard;



