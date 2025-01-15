import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assests/logo.png";
// import red from "../assests/rednotify.png";
import blue from "../assests/bluenotify.png"
import "./Headerwithsearch.css";
import axios from "axios";
import ToggleSwitch from "../Body/Toggleswitch";
import {apis} from "../Api/Api.js";


const Headerwithsearch = ({ mode, toggleMode }) => {

    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (query.length > 0) {
            loadSuggestions(query);
        } else {
            clearSuggestions();
        }
    }, [query]);

    const loadSuggestions = async (query) => {
        try {
            // const response1 = await axios.get(`${apis.headsearch}?query=${query}`); // Use fetch if preferred
            const response = await axios.get(`${apis.headsearch}`); // Use fetch if preferred
            // API returns a JSON array
            console.log(response.data)
            const title = response.data.map((items) => items.title);
            const filter_title = title.filter(item => item.toLowerCase().includes(query.toLowerCase()))
            setSuggestions(filter_title);
            // Initially show all news
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };
    // const loadSuggestions = (query) => {
    //      fetchNews(query);
    //     // const news = ["abc", "efg", "hik", "jkl", "mno"];
    //     // const filteredSuggestions = news.filter(s => s.toLowerCase().includes(query.toLowerCase()));
    //     // setSuggestions(filteredSuggestions);
    // };

    const clearSuggestions = () => {
        setSuggestions([]);
    };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion);
        clearSuggestions();

    };

    return (
        <header className={`d-flex justify-content-between align-items-center mb-4 h-100 divider`}>
            <div className="d-flex align-items-center">
                <img src={logo} alt="FreePress Logo" className="me-2" style={{ height: "70px" }} />
                <div className="logo fw-bold fs-4"></div>
            </div>
            <nav>
                <a href="https://www.cricbuzz.com/" className="me-3 text-decoration-none text-light" target="_blank" rel="noreferrer">
                    Sports
                </a>
                <a href="https://timesofindia.indiatimes.com/business" className="me-3 text-decoration-none text-light" target="_blank" rel="noreferrer">
                    Business
                </a>
                <a href="https://timesofindia.indiatimes.com/health" className="me-3 text-decoration-none text-light " target="_blank" rel="noreferrer">
                    Health
                </a>
                <a href="https://timesofindia.indiatimes.com/health" className="me-3 text-decoration-none text-light " target="_blank" rel="noreferrer">
                    Technology
                </a>
                <a href="https://timesofindia.indiatimes.com/health" className="me-3 text-decoration-none text-light " target="_blank" rel="noreferrer">
                    Finance
                </a>
            </nav>
            <div className='align-items-center' style={{ display: "flex" }}>

                <div className="search-container position-relative">
                    <input
                        type="text"
                        id="search-bar"
                        className={`form-control ${suggestions.length > 0 ? "has-suggestions" : ""}`}
                        placeholder="Search for articles and news"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    {suggestions.length > 0 && (
                        <div id="suggestions">
                            {suggestions.map((suggestion, index) => (
                                <div
                                    key={index}
                                    className="suggestion"
                                    onClick={() => handleSuggestionClick(suggestion)}
                                >
                                    {suggestion}
                                </div>
                            ))}
                        </div>
                    )}

                </div>
                <div style={{ display: "flex" }}>
                    <button className="btn btn-primary mx-2" style={{ width: 'fit-content' }}>Search</button>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        < ToggleSwitch mode={mode} toggleMode={toggleMode} />
                    </div>
                    <div >
                        <img src={blue} alt="FreePress Logo" style={{ width: '25px', height: '25px', marginLeft : '15px', marginRight : '15px' }} />
                    </div>
                </div>
            </div>


        </header>

    );
};

export default Headerwithsearch;
