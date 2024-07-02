// App.js
import React from 'react';
import { Link } from 'react-router-dom';

const Klassen = () => {
    return (
        <div className="home">
            <div className="container">
                <header className="header">
                    <h1 className="title">Home / Klassen</h1>
                    <input type="text" className="search-input" placeholder="Zoeken..." />
                </header>
                <main className="main">
                    {Array.from({ length: 30 }).map((_, index) => (
                        <button data-target="js-modal-klas-choise" key={index} className="card card--klas">
                            <div className="card-content">
                                <h2 className="name">TIA4V2c</h2>
                            </div>
                        </button>
                    ))}


                    <dialog>
                        <div className="modal-header">
                            <h1 className="title">Klas</h1>
                            <button className="close-button">X</button>
                        </div>
                        <div className='modal-body'>
                            <Link to={'/klassen/TIA4V2c/vakken'} className="card">
                                <p>Vakken</p>
                            </Link>
                            <Link to={'/klassen/TIA4V2c/skills'} className="card">
                                <p>Skills</p>
                            </Link>
                        </div>
                    </dialog>

                </main>
            </div>
        </div>
    );
};

export default Klassen;
