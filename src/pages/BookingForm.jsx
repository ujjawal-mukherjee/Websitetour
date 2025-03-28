import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/BookingForm.css';
import ok from '../assets/images/ok.png';
const BookingForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const hotel = location.state?.hotel || {};
    const [numPersons, setNumPersons] = useState(1);
    const [specialRequests, setSpecialRequests] = useState('');
    const [username, setUsername] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/auth/', {
                    credentials: 'include'
                });

                if (response.ok) {
                    const data = await response.json();
                    setUsername(data.user.userName);
                }
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        fetchUser();
    }, []);

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
                credentials: 'include',
                body: JSON.stringify(bookingData),
            });

            if (response.ok) {
                setShowPopup(true);
                setTimeout(() => {
                    setShowPopup(false);
                    navigate('/home');
                }, 3000);
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
            <h2>Hello {username}</h2>
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

            {/* Success Popup */}
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <img src={ok} alt="Success" className="success-icon" />
                        <h3>Booking Successful!</h3>
                        <button onClick={() => setShowPopup(false)}>OK</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookingForm;
