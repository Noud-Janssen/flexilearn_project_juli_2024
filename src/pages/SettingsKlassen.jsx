// App.js
import React from 'react';
import { Link } from 'react-router-dom';

const Klassen = () => {
    return (
        <div className="settings">
            <div className="container">
                <header className="navbar">
                    <div className="breadcrumbs">
                        <Link to={"/"}>Home</Link>
                        <span className='slash'>/</span>
                        <span className=''>Settings</span>
                        <span className='slash'>/</span>
                        <span className='active'>Klassen</span>
                    </div>
                    <input type="text" className="search-input" placeholder="Zoeken..." />
                </header>
                <main className="main d-grid">
                    {Array.from({ length: 30 }).map((_, index) => (
                        <button key={index} className="card card--klas">
                            <div className="card-content">
                                <h2 className="name">TIA4V2c</h2>
                            </div>
                        </button>
                    ))}
                </main>
            </div>
        </div>
    );
};

export default Klassen;
