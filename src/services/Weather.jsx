import React, { useState } from 'react';
import Search from './Search';
import Result from './Result';
import './Weather.css';
import axios from 'axios';
const Weather = () => {
    const [search, setSearch] = useState('');
    const [weather, setWeather] = useState([]);
    const [history, setHistory] = useState([]);
    const changeSearch = (value) => {
        setSearch(value);
    }
    const searchWeatherHandler = () => {
        if (search !== "") {
            axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=5e51e91dea41def853460e85e81878d0&units=metric`
            ).then((response) => {
                if (!history.includes(search)) {
                    setHistory([...history, search]);
                }
                setWeather(response.data);
            }).catch((error) => {
                console.error(error);
            });
        }
    };
    const historySearchHandler = (data) => {
        setSearch(data);
        if (data !== '') {
            axios
                .get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=5e51e91dea41def853460e85e81878d0&units=metric`
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
        <div className='weather'>
            <h2 className='weather-heading'>Weather Finder</h2>
            <p className='weather-subheading'>Get accurate weather information for any city!</p>
            <Search searchData={search} eventHandler={changeSearch} searchWeather={searchWeatherHandler} />
            <Result weatherData={weather} historyData={history} historySearch={historySearchHandler} />
        </div>
    );
};

export default Weather
