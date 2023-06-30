import React, { useState } from "react";

const SearchBar = ({ searchImages }) => {
    const [query, setQuery] = useState("");

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform search with the query
        console.log("Search:", query);
        // Reset the query
        searchImages(query);
        setQuery("");
    };

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search high-resolution images"
                required
            />
            <button type="submit">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="10.5" cy="10.5" r="7.5" />
                    <line x1="21" y1="21" x2="15.8" y2="15.8" />
                </svg>
            </button>
        </form>
    );
};

export default SearchBar;
