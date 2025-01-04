import React, { useRef } from 'react';
import './Search.css'; // Import the CSS

export default function Search(props) {
    const searchInput = useRef();

    return (
        <div className="search-container">
            <input
                type="search"
                value={props.searchData}
                className="search-input"
                onChange={() => props.eventHandler(searchInput.current.value)}
                ref={searchInput}
                placeholder="Enter city name"
            />
            <button onClick={props.searchWeather} className="search-button">
                Search
            </button>
        </div>
    );
}
