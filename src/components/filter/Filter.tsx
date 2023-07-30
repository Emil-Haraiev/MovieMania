import React from 'react';
import './index.css'


const Filter = () => {
    return (
        <div>
            <div className="tab-container">
                <div className="tab active" data-tab="All">ALL</div>
                <div className="tab" data-tab="Movies">Movies</div>
                <div className="tab" data-tab="TV-serials">TV Serials</div>
            </div>
        </div>
    );
};

export default Filter;