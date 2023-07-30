import React from 'react';
// import logo from '../src/assets/logo.png'
import './App.css';
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import MovieCard from "./components/movieCard/MovieCard";

function App() {
  return (
    <div className='mainContainer'>
        <Header/>
        <Search/>

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
        </div>
    </div>
  );
}

export default App;
