import React from 'react';
import './index.css'


const Filter = () => {
    return (
        <div className='tabWrapper'>
            <div className="tab-container">
                <div className="tab active" data-tab="All">All</div>
                <div className="tab" data-tab="Movies">Movies</div>
                <div className="tab" data-tab="TV-shows">TV Shows</div>
            </div>
        </div>
    );
};

export default Filter;