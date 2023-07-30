import React from 'react';
// import logo from '../src/assets/logo.png'
import './App.css';
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import MovieCard from "./components/movieCard/MovieCard";
import Filter from "./components/filter/Filter";

function App() {
  return (
    <div className='mainContainer'>
        <Header/>
        <Search/>
        <Filter/>
        <div className="movieContainer">
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
        </div>
    </div>
  );
}

export default App;
