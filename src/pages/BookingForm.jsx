import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/BookingForm.css';

const BookingForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const hotel = location.state?.hotel || {};

    const [numPersons, setNumPersons] = useState(1);
    const [specialRequests, setSpecialRequests] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const cleanedPrice = hotel.price.replace(/[₹,]/g, '');
        const bookingData = {
            hotelName: hotel.name,
            price: parseFloat(cleanedPrice),
            numPersons,
            specialRequests,
        };
        try {
            const response = await fetch('http://localhost:5000/api/auth/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Include session cookies
                body: JSON.stringify(bookingData),
            });

            if (response.ok) {
                alert('Booking successful!');
                navigate('/bookings');
            } else {
                let errorData;
                try {
                    errorData = await response.json();
                } catch {
                    errorData = { message: 'An unexpected error occurred.' };
                }
                alert(errorData.message || 'Booking failed. Please try again.');
            }
        } catch (error) {
            console.error('Error while booking:', error);
            alert('An error occurred while booking. Please try again.');
        }
    };

    return (
        <div className="booking-form-container">
            <h2>Continue your booking at {hotel.name}</h2>
            <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group">
                    <label htmlFor="numPersons">Number of Persons:</label>
                    <input
                        type="number"
                        id="numPersons"
                        value={numPersons}
                        min="1"
                        onChange={(e) => setNumPersons(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="specialRequests">Special Requests:</label>
                    <textarea
                        id="specialRequests"
                        value={specialRequests}
                        onChange={(e) => setSpecialRequests(e.target.value)}
                        placeholder="Enter any special requests here..."
                    ></textarea>
                </div>

                <button type="submit" className="submit-button">Confirm Booking</button>
            </form>
        </div>
    );
};

export default BookingForm;
