import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigate hook
import "../styles/tour-card.css";

const TourCard = ({ tour }) => {
  const navigate = useNavigate();

  const handleBookNowClick = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/check-login", {
        credentials: "include", // Ensure cookies are included for session-based login verification
      });

      if (response.ok) {
        const data = await response.json();
        const user = data.user; // Assuming 'data.user' contains user info
        console.log("data is", data.user);
        // Navigate to the booking form and pass both user and tour details
        navigate("/booking-form", { state: { user, hotel: tour } });
      } else {
        alert("You need to log in first to book a tour!");
        navigate("/login"); // Redirect to login if not logged in
      }
    } catch (error) {
      console.error("Error checking login status:", error);
      alert("Unable to verify login status. Please try again.");
    }
  };

  return (
    <div className="tour-card">
      <img src={tour.image} alt={tour.name} className="tour-card-image" />
      <div className="tour-card-content">
        <h3>{tour.name}</h3>
        <p>{tour.description}</p>
        <p className="tour-card-price">{tour.price}</p>
        <button className="tour-card-button" onClick={handleBookNowClick}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TourCard;
