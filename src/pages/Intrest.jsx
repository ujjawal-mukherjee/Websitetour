/*import React, { useState } from 'react';
import '../styles/intrest.css';
import take1 from '../assets/images/take1.jpg';
import take2 from '../assets/images/take2.jpg';
import take3 from '../assets/images/take3.jpg';
import take4 from '../assets/images/take4.jpg';
import take5 from '../assets/images/take5.jpg';
import take6 from '../assets/images/take6.jpg';
import take7 from '../assets/images/take7.jpg';
import take8 from '../assets/images/take8.jpg';
import take9 from '../assets/images/take9.jpg';
import take10 from '../assets/images/take10.jpg';
import take11 from '../assets/images/Aimag.jpg';
import take12 from '../assets/images/Bimg.jpg';
import take13 from '../assets/images/Cimg.jpg';
import take14 from '../assets/images/Dimg.jpg';
import take15 from '../assets/images/E1img.jpg';

const Intrest = () => {
    const [searchTerm, setSearchTerm] = useState('');
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
                navigate('/booking-form1', { state: { user, hotel } });
            } else {
                alert('Please log in to book a hotel.');
                navigate('/login');
            }
        } catch (error) {
            console.error('Error checking login status:', error);
            alert('Unable to verify login status. Please try again.');
        }
    };

    const categories = [
        {
            title: "Wildlife",
            places: [
                {
                    name: "Jim Corbett National Park",
                    description: "Experience the thrill of tiger spotting in India's oldest national park. Home to diverse wildlife including tigers, elephants, and over 600 bird species.",
                    price: "₹5,000",
                    image: take1,
                },
                {
                    name: "Ranthambore National Park",
                    description: "Famous for its tigers and ancient ruins, offering a unique blend of nature and history in Rajasthan.",
                    price: "₹6,000",
                    image: take2,
                },
                {
                    name: "Sanjay Gandhi National Park",
                    description: "Famous for its Deer and ancient wild animals, a unique wildlife destination in Mumbai.",
                    price: "₹7,000",
                    image: take11,
                },
            ]
        },
        {
            title: "Adventure",
            places: [
                {
                    name: "Rishikesh",
                    description: "Adventure capital of India offering white water rafting, bungee jumping, and trekking opportunities.",
                    price: "5,000",
                    image: take3,
                },
                {
                    name: "Manali",
                    description: "Paradise for adventure enthusiasts with skiing, paragliding, and mountain biking options.",
                    price: "₹6,000",
                    image: take4,
                },
                {
                    name: "Gangtok",
                    description: "Paradise for adventure enthusiasts with skiing, paragliding, and mountain biking options.",
                    price: "₹7,000",
                    image: take12,
                },
            ]
        },
        {
            title: "Honeymoon",
            places: [
                {
                    name: "Udaipur",
                    description: "The city of lakes offers romantic boat rides, luxury palaces, and stunning sunset views.",
                    price: "₹5000",
                    image: take5,
                },
                {
                    name: "Maldives",
                    description: "Crystal clear waters, overwater villas, and private beaches perfect for couples.",
                    price: "₹6,000",
                    image: take6,
                },
                {
                    name: "Lakshadweep",
                    description: "Heartful places and beaches, overwater villas, and private beaches perfect for couples.",
                    price: "₹8,000",
                    image: take13,
                }
            ]
        },
        {
            title: "Beaches",
            places: [
                {
                    name: "Goa",
                    description: "Famous for its pristine beaches, nightlife, and water sports activities.",
                    price: "₹9,000",
                    image: take7,
                },
                {
                    name: "Andaman Islands",
                    description: "Exotic beaches with crystal clear waters, perfect for snorkeling and scuba diving.",
                    price: "₹5,000",
                    image: take8,
                },
                {
                    name: "Maldives",
                    description: "Perfect beaches with crystal clear waters, perfect for snorkeling and scuba diving.",
                    price: "₹6,000",
                    image: take14,
                }
            ]
        },
        {
            title: "Pilgrimage",
            places: [
                {
                    name: "Varanasi",
                    description: "One of the oldest living cities, famous for its spiritual ghats and ancient temples.",
                    price: "₹9,000",
                    image: take9,
                },
                {
                    name: "Tirupati",
                    description: "Home to the famous Venkateshwara Temple, one of the most visited pilgrimage sites.",
                    price: "₹8,000",
                    image: take10,
                },
                {
                    name: "Ganga ghat,Kolkata",
                    description: "Enjoy the clear ganga river and evening Ganga arti at this wonderful place",
                    price: "₹7,000",
                    image: take15,
                },
            ]
        }
        // Add remaining categories...
    ];

    const filteredCategories = categories.map(category => ({
        ...category,
        places: category.places.filter(place =>
            place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            place.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(category => category.places.length > 0);

    return (
        <div className="interest-container">
            
            <div className="search-section">
                <h1 className="main-title">Find Your Perfect Destination</h1>
                <input
                    type="text"
                    placeholder="Search destinations according to your mood."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <i className="search-icon">🔍</i>
            </div>

            {filteredCategories.map((category) => (
                <section key={category.title} className="category-section">
                    <h2 className="category-title">{category.title}</h2>
                    <div className="places-grid">
                        {category.places.map((place) => (
                            <div key={place.name} className="place-card">
                                <img
                                    src={place.image}
                                    alt={place.name}
                                    className="place-image"
                                />
                                <div className="card-content">
                                    <h3 className="place-name">{place.name}</h3>
                                    <h3 className="place-name">Starts At: {place.price}</h3>
                                    <p className="place-description">{place.description}</p>
                                    <button
                                        className="book-now-btn"
                                        onClick={() => handleBookNow(hotel)}
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Intrest;
*/
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/intrest.css';
import take1 from '../assets/images/take1.jpg';
import take2 from '../assets/images/take2.jpg';
import take3 from '../assets/images/take3.jpg';
import take4 from '../assets/images/take4.jpg';
import take5 from '../assets/images/take5.jpg';
import take6 from '../assets/images/take6.jpg';
import take7 from '../assets/images/take7.jpg';
import take8 from '../assets/images/take8.jpg';
import take9 from '../assets/images/take9.jpg';
import take10 from '../assets/images/take10.jpg';
import take11 from '../assets/images/Aimag.jpg';
import take12 from '../assets/images/Bimg.jpg';
import take13 from '../assets/images/Cimg.jpg';
import take14 from '../assets/images/Dimg.jpg';
import take15 from '../assets/images/E1img.jpg';

const Intrest = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // Initialize navigate

    const handleBookNow = async (place) => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/check-login', {
                credentials: 'include', // Include cookies for session management
            });
            if (response.ok) {
                const data = await response.json();
                const user = data.user;
                navigate('/booking-form1', { state: { user, hotel: place } }); // Navigate to booking page with state
            } else {
                alert('Please log in to book a hotel.');
                navigate('/login'); // Navigate to login page
            }
        } catch (error) {
            console.error('Error checking login status:', error);
            alert('Unable to verify login status. Please try again.');
        }
    };

    const categories = [
        {
            title: "Wildlife",
            places: [
                {
                    name: "Jim Corbett National Park",
                    description: "Experience the thrill of tiger spotting in India's oldest national park. Home to diverse wildlife including tigers, elephants, and over 600 bird species.",
                    price: "₹5,000",
                    image: take1,
                },
                {
                    name: "Ranthambore National Park",
                    description: "Famous for its tigers and ancient ruins, offering a unique blend of nature and history in Rajasthan.",
                    price: "₹6,000",
                    image: take2,
                },
                {
                    name: "Sanjay Gandhi National Park",
                    description: "Famous for its Deer and ancient wild animals, a unique wildlife destination in Mumbai.",
                    price: "₹7,000",
                    image: take11,
                },
            ]
        },
        {
            title: "Adventure",
            places: [
                {
                    name: "Rishikesh",
                    description: "Adventure capital of India offering white water rafting, bungee jumping, and trekking opportunities.",
                    price: "5,000",
                    image: take3,
                },
                {
                    name: "Manali",
                    description: "Paradise for adventure enthusiasts with skiing, paragliding, and mountain biking options.",
                    price: "₹6,000",
                    image: take4,
                },
                {
                    name: "Gangtok",
                    description: "Paradise for adventure enthusiasts with skiing, paragliding, and mountain biking options.",
                    price: "₹7,000",
                    image: take12,
                },
            ]
        },
        {
            title: "Honeymoon",
            places: [
                {
                    name: "Udaipur",
                    description: "The city of lakes offers romantic boat rides, luxury palaces, and stunning sunset views.",
                    price: "₹5000",
                    image: take5,
                },
                {
                    name: "Maldives",
                    description: "Crystal clear waters, overwater villas, and private beaches perfect for couples.",
                    price: "₹6,000",
                    image: take6,
                },
                {
                    name: "Lakshadweep",
                    description: "Heartful places and beaches, overwater villas, and private beaches perfect for couples.",
                    price: "₹8,000",
                    image: take13,
                }
            ]
        },
        {
            title: "Beaches",
            places: [
                {
                    name: "Goa",
                    description: "Famous for its pristine beaches, nightlife, and water sports activities.",
                    price: "₹9,000",
                    image: take7,
                },
                {
                    name: "Andaman Islands",
                    description: "Exotic beaches with crystal clear waters, perfect for snorkeling and scuba diving.",
                    price: "₹5,000",
                    image: take8,
                },
                {
                    name: "Maldives",
                    description: "Perfect beaches with crystal clear waters, perfect for snorkeling and scuba diving.",
                    price: "₹6,000",
                    image: take14,
                }
            ]
        },
        {
            title: "Pilgrimage",
            places: [
                {
                    name: "Varanasi",
                    description: "One of the oldest living cities, famous for its spiritual ghats and ancient temples.",
                    price: "₹9,000",
                    image: take9,
                },
                {
                    name: "Tirupati",
                    description: "Home to the famous Venkateshwara Temple, one of the most visited pilgrimage sites.",
                    price: "₹8,000",
                    image: take10,
                },
                {
                    name: "Ganga ghat,Kolkata",
                    description: "Enjoy the clear ganga river and evening Ganga arti at this wonderful place",
                    price: "₹7,000",
                    image: take15,
                },
            ]
        }
        // Add remaining categories...
    ];

    const filteredCategories = categories.map(category => ({
        ...category,
        places: category.places.filter(place =>
            place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            place.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(category => category.places.length > 0);

    return (
        <div className="interest-container">
            <div className="search-section">
                <h1 className="main-title">Find Your Perfect Destination</h1>
                <input
                    type="text"
                    placeholder="Search destinations according to your mood."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <i className="search-icon">🔍</i>
            </div>

            {filteredCategories.map((category) => (
                <section key={category.title} className="category-section">
                    <h2 className="category-title">{category.title}</h2>
                    <div className="places-grid">
                        {category.places.map((place) => (
                            <div key={place.name} className="place-card">
                                <img
                                    src={place.image}
                                    alt={place.name}
                                    className="place-image"
                                />
                                <div className="card-content">
                                    <h3 className="place-name">{place.name}</h3>
                                    <h3 className="place-name">Starts At: {place.price}</h3>
                                    <p className="place-description">{place.description}</p>
                                    <button
                                        className="book-now-btn"
                                        onClick={() => handleBookNow(place)}
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Intrest;
