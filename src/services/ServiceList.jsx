
import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import { Col, Row } from 'reactstrap';
import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import checkImg from '../assets/images/check_vlog.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ServiceList.css';

const servicesData = [
    {
        imgUrl: weatherImg,
        title: 'Calculate Weather',
        title1: 'Click on the image icon to know the weather',
        desc: 'Get accurate weather information for any city.',
    },
    {
        imgUrl: guideImg,
        title: 'Write Tour Blog',
        title1: 'Click on the image icon to write the blog.',
        desc: 'Write your Blog and review the visited Place.',
    },
    {
        imgUrl: guideImg,
        title: 'View Blog',
        title1: 'Click on the image icon to View Tour blogs.',
        desc: 'View Blogs of different tourists who visited different places',
    }
];

const ServiceList = () => {
    //const [search, setSearch] = useState('');
    //const [weather, setWeather] = useState([]);
    //const [history, setHistory] = useState([]);
    //const [selectedService, setSelectedService] = useState(null);
    const navigate = useNavigate();

    /*const changeSearch = (value) => {
        setSearch(value);
    };*/

    const Handleclick = (event, title) => {
        if (event && event.preventDefault) {
            event.preventDefault();
        }
        if (title === "Calculate Weather") {
            navigate('/weather');
        }
        else if (title === "Write Tour Blog") {
            navigate('/blog');
        }
        else if (title === "View Blog") {
            navigate('/allblog');
        }
    };

    /*const searchWeatherHandler = () => {
        if (search !== '') {
            axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=5e51e91dea41def853460e85e81878d0&units=metric`
            )
                .then((response) => {
                    if (!history.includes(search)) {
                        setHistory([...history, search]);
                    }
                    setWeather(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };*/

    return (
        <div className='services'>
            <Row>
                {servicesData.map((item, index) => (
                    <Col lg="4" md="6" sm="12" key={index}>
                        <ServiceCard
                            item={item}
                            clickHandler={(event) => Handleclick(event, item.title)}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ServiceList;
