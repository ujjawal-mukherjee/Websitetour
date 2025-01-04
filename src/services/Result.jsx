import React from 'react';
import './Result.css'; // Import the CSS

export default function Result({ weatherData, historyData, historySearch }) {
    const historyItems = historyData.map((item, index) => (
        <li
            onClick={() => historySearch(item)}
            className="history-item"
            key={index}
        >
            {item}
        </li>
    ));

    return (
        <div className="result-container">
            {/* History Section */}
            <div className="history">
                <span className="history-title">History</span>
                <ul className="history-list">{historyItems}</ul>
            </div>

            {/* Weather Result Section */}
            <div className="weather-result">
                {weatherData.length !== 0 ? (
                    <>
                        <h2 className="city-name">{weatherData.name}</h2>
                        <div className="temperature">
                            <div>Max Temp: {weatherData.main.temp_max}°C</div>
                            <div>Min Temp: {weatherData.main.temp_min}°C</div>
                        </div>
                        <div className="icon">
                            <img
                                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                                alt={weatherData.weather[0].main}
                            />
                            <div className="status">{weatherData.weather[0].main}</div>
                        </div>
                    </>
                ) : (
                    <h3 className="no-data">Please enter the city name</h3>
                )}
            </div>
        </div>
    );
}
