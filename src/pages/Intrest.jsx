import React from 'react';
import '../styles/intrest.css';
import take1 from '../assets/images/take1.jpg'
import take2 from '../assets/images/take2.jpg'
import take3 from '../assets/images/take3.jpg'
import take4 from '../assets/images/take4.jpg'
import take5 from '../assets/images/take5.jpg'
import take6 from '../assets/images/take6.jpg'
import take7 from '../assets/images/take7.jpg'
import take8 from '../assets/images/take8.jpg'
import take9 from '../assets/images/take9.jpg'
import take10 from '../assets/images/take10.jpg'
const Intrest = () => {
    const categories = [
        {
            title: "Wildlife",
            places: [
                {
                    name: "Jim Corbett National Park",
                    description: "Experience the thrill of tiger spotting in India's oldest national park. Home to diverse wildlife including tigers, elephants, and over 600 bird species.",
                    image: take1,
                },
                {
                    name: "Ranthambore National Park",
                    description: "Famous for its tigers and ancient ruins, offering a unique blend of nature and history in Rajasthan.",
                    image: take2,
                }
            ]
        },
        {
            title: "Adventure",
            places: [
                {
                    name: "Rishikesh",
                    description: "Adventure capital of India offering white water rafting, bungee jumping, and trekking opportunities.",
                    image: take3,
                },
                {
                    name: "Manali",
                    description: "Paradise for adventure enthusiasts with skiing, paragliding, and mountain biking options.",
                    image: take4,
                }
            ]
        },
        {
            title: "Honeymoon",
            places: [
                {
                    name: "Udaipur",
                    description: "The city of lakes offers romantic boat rides, luxury palaces, and stunning sunset views.",
                    image: take5,
                },
                {
                    name: "Maldives",
                    description: "Crystal clear waters, overwater villas, and private beaches perfect for couples.",
                    image: take6,
                }
            ]
        },
        {
            title: "Beaches",
            places: [
                {
                    name: "Goa",
                    description: "Famous for its pristine beaches, nightlife, and water sports activities.",
                    image: take7,
                },
                {
                    name: "Andaman Islands",
                    description: "Exotic beaches with crystal clear waters, perfect for snorkeling and scuba diving.",
                    image: take8,
                }
            ]
        },
        {
            title: "Pilgrimage",
            places: [
                {
                    name: "Varanasi",
                    description: "One of the oldest living cities, famous for its spiritual ghats and ancient temples.",
                    image: take9,
                },
                {
                    name: "Tirupati",
                    description: "Home to the famous Venkateshwara Temple, one of the most visited pilgrimage sites.",
                    image: take10,
                }
            ]
        }
    ];

    return (
        <div className="interest-container">
            <h1 className="main-title">Find Your Perfect Destination</h1>

            {categories.map((category) => (
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
                                    <p className="place-description">{place.description}</p>
                                    <button className="learn-more-btn">
                                        Learn More
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
