import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/places.css';
import hotel1 from '../assets/images/hotel1.jpg';
import hotel2 from '../assets/images/hotel2.jpg';
import hotel3 from '../assets/images/hotel3.jpg';
import hotel4 from '../assets/images/hotel4.jpg';
import hotel5 from '../assets/images/hotel5.jpg';
import hotel6 from '../assets/images/hotel6.jpg';

const Places = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const isLoggedIn = !!localStorage.getItem('user'); // Check if user is logged in

    const handleBookNow = async (hotel) => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/check-login', {
                credentials: 'include'
            });
            console.log(response);
            if (response.ok) {
                const data = await response.json();
                const user = data.user;
                navigate('/booking-form', { state: { user, hotel } });
            } else {
                alert('Please log in to book a hotel.');
                navigate('/login');
            }
        } catch (error) {
            console.error('Error checking login status:', error);
            alert('Unable to verify login status. Please try again.');
        }
    };


    const cities = [
        {
            name: "New Delhi",
            hotels: [
                {
                    name: "The Imperial",
                    image: hotel1,
                    price: "₹15,000",
                    rating: 4.8,
                    description: "Luxury hotel with colonial elegance, featuring spa and fine dining."
                },
                {
                    name: "Taj Palace",
                    image: hotel2,
                    price: "₹12,000",
                    rating: 4.7,
                    description: "5-star hotel with modern amenities and traditional hospitality."
                }
            ]
        },
        {
            name: "Mumbai",
            hotels: [
                {
                    name: "The Taj Mahal Palace",
                    image: hotel3,
                    price: "₹20,000",
                    rating: 4.9,
                    description: "Iconic seafront hotel with stunning architecture and world-class service."
                },
                {
                    name: "The Oberoi",
                    image: hotel4,
                    price: "₹18,000",
                    rating: 4.8,
                    description: "Contemporary luxury hotel with ocean views and gourmet restaurants."
                }
            ]
        },
        {
            name: "Jaipur",
            hotels: [
                {
                    name: "Rambagh Palace",
                    image: hotel5,
                    price: "₹25,000",
                    rating: 4.9,
                    description: "Former royal residence turned luxury hotel with magnificent gardens."
                },
                {
                    name: "JW Marriott",
                    image: hotel6,
                    price: "₹12,000",
                    rating: 4.6,
                    description: "Modern luxury hotel with traditional Rajasthani elements."
                }
            ]
        }
    ];

    const filteredCities = cities.filter(city =>
        city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        city.hotels.some(hotel =>
            hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <div className="topmost">
            <div className="places-to-stay-container">
                <div className="search-section">
                    <h1>Find Your Perfect Stay</h1>
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Search for cities or hotels..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                        <i className="search-icon">🔍</i>
                    </div>
                </div>

                <div className="cities-container">
                    {filteredCities.map((city) => (
                        <div key={city.name} className="city-section">
                            <h2 className="city-title">{city.name}</h2>
                            <div className="hotels-grid">
                                {city.hotels.map((hotel) => (
                                    <div key={hotel.name} className="hotel-card">
                                        <div className="hotel-image-container">
                                            <img src={hotel.image} alt={hotel.name} className="hotel-image" />
                                            <span className="hotel-rating">★ {hotel.rating}</span>
                                        </div>
                                        <div className="hotel-info">
                                            <h3 className="hotel-name">{hotel.name}</h3>
                                            <p className="hotel-description">{hotel.description}</p>
                                            <div className="hotel-footer">
                                                <span className="hotel-price">Starting from {hotel.price}</span>
                                                <button
                                                    className="book-now-btn"
                                                    onClick={() => handleBookNow(hotel)}
                                                >
                                                    Book Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Places;

