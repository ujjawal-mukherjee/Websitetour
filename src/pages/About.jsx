import React from 'react'
import '../styles/about.css'
import img from '../assets/images/ujjawal1.jpeg'
const About = () => {
    return (
        <div>
            <h2 className='heading'>About Our Website</h2>
            <div className='paragraph'>
                <p>Welcome to Travel World, your trusted companion in exploring the world’s most breathtaking destinations! We are a passionate team of travel enthusiasts dedicated to crafting memorable journeys that inspire and rejuvenate. Whether you’re seeking serene landscapes, vibrant cultural experiences, or thrilling adventures, we are here to turn your travel dreams into reality.Our platform offers curated tour packages, personalized itineraries, and expert guidance to ensure a seamless and enriching experience. From exotic getaways to hidden gems, we connect you with the best destinations while prioritizing comfort, safety, and sustainability.
                    Our platform offers curated tour packages, personalized itineraries, and expert guidance to ensure a seamless and enriching experience. From exotic getaways to hidden gems, we connect you with the best destinations while prioritizing comfort, safety, and sustainability.

                    At Travel World, we believe in creating meaningful connections between people and places. Join us in uncovering the beauty and diversity of our planet. Your journey to unforgettable memories begins here!At [Your Website Name], we believe in creating meaningful connections between people and places. Join us in uncovering the beauty and diversity of our planet. Your journey to unforgettable memories begins here!</p>
            </div>
            <div className='devloper'>
                <h5 className='head'>About the devloper</h5>
                <img src={img} alt="devloper" />
                <p>Hey Everyone I am Ujjawal Kumar Mukherjee Third year student at Heritage institute of technology,kolkata.I am builing this project for my internship.This website will help people to find their desired tourist destination.</p>
            </div>
        </div>
    )
}

export default About
