import React from 'react';
import './index.css';

// @ts-ignore
import search from '../../assets/search.svg'


const Search = () => {
    return (
        <div className='searchContainer'>
            <h1 className="title">MovieMania</h1>
            <div className="text">Welcome to MovieMania - your ultimate source for finding movies, TV shows, and series!
                Our app offers a wide range of options for convenient content search.
                Simply enter the movie title or select the genre and rating to find exactly what you're looking for.
                Get access to ratings, reviews, and other interesting information about movies to make the right choice before watching.
                Enjoy your viewing experience and explore the world of cinema on MovieMania!</div>
            <div className="searchForm">
                <div className="icon">
                    <img src={search} alt="search"/>
                </div>
                <input type="text" id="search" autoComplete="off" className="searchInput"
                       placeholder="eg. Avatar"
                />
                <label htmlFor="search">Search movies or tv shows</label>
            </div>
        </div>
    );
};

export default Search;