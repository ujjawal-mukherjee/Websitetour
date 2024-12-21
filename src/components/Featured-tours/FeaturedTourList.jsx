import React from "react";
import TourCard from "../../shared/TourCard";
import tourData from "../../assets/data/tours";
import { Row, Col } from "reactstrap";
import './Feature.css'
const FeaturedTourList = () => {
  return (
    <div className="tour-grid">
      {tourData.map((tour) => (
        <TourCard tour={tour} key={tour.id} />
      ))}
    </div>
  );
};

export default FeaturedTourList;