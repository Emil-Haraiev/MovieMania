import React from 'react';
// import logo from '../src/assets/logo.png'
import './App.css';
import Header from "./components/header/Header";
import Search from "./components/search/Search";

function App() {
  return (
    <div className='mainContainer'>
        <Header/>
        <Search/>
    </div>
  );
}

export default App;
