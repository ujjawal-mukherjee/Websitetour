import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import { Col, Row } from 'reactstrap';
import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';
import Search from './Search';
import Result from './Result';
import axios from 'axios';
import { Container, Button } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
const servicesData = [
    {
        imgUrl: weatherImg,
        title: 'Calculate Weather',
        title1: 'Click on the image icon to know the weather',
        desc: 'Get accurate weather information for any city.',
    },

    {
        imgUrl: guideImg,
        title: 'Register your tourist place',
        title1: 'Click on the image icon to register your tourist spot.',
        desc: 'Register tourist spot and give detail information about your spot.',
    },
    /*
    {
        imgUrl: customizationImg,
        title: 'Customization',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    */
];

const ServiceList = () => {
    const [search, setSearch] = useState('');
    const [weather, setWeather] = useState([]);
    const [history, setHistory] = useState([]);
    const [selectedService, setSelectedService] = useState(null);

    const changeSearch = (value) => {
        setSearch(value);
    };

    const searchWeatherHandler = () => {
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
    };

    const historySearchHandler = (data) => {
        setSearch(data);
        if (data !== '') {
            axios
                .get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=5e51e91dea41def853460e85e81878d0&units=metric`
                )
                .then((response) => {
                    if (!history.includes(data)) {
                        setHistory([...history, data]);
                    }
                    setWeather(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    return (
        <>
            <Row>
                {servicesData.map((item, index) => (
                    <Col lg="4" md="6" sm="12" key={index}>
                        <ServiceCard
                            item={item}
                            clickHandler={setSelectedService}
                        />
                    </Col>
                ))}
            </Row>
            {/* <Button className="btn secondary__btn">
                <Link to={'/logout'}>Logout</Link>
            </Button>*/}
            {selectedService === 'Calculate Weather' && (
                <div className="mt-5">
                    <Search
                        searchData={search}
                        eventHandler={changeSearch}
                        searchWeather={searchWeatherHandler}
                    />
                    <Result
                        weatherData={weather}
                        historyData={history}
                        historySearch={historySearchHandler}
                    />
                </div>

            )}
        </>
    );
};

export default ServiceList;
