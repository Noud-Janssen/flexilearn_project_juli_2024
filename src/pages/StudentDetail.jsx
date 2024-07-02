import { ArrowCircleLeftRounded } from '@mui/icons-material';
import { IconButton } from '@mui/joy';
import React from 'react';
import iconStyle from '../iconStyle';
import BackButton from '../components/backButton';

const StudentDetail = () => {


    return (
        <>
        <BackButton/>
        <div className="student-detail">
            <header className="header">
                <div className="student-info">
                    <img
                        src="https://via.placeholder.com/50"
                        alt="Profile"
                        className="profile-img"
                    />
                    <div className="student-name">
                        <h1 className="name">Jollie van huizen</h1>
                        <p className="details">1032353 - TIA4V2c</p>
                    </div>
                </div>
                <button className="edit-button">Edit</button>
            </header>
            <main className="main">
                {/* Table Sections */}
                <section className="table-section">
                    <div>
                        <h3 className="section-title">Cijfers</h3>
                        <table className="table">
                            <thead className='table-top'>
                                <tr>
                                    <th>Vakken</th>
                                    <th>Periode 1</th>
                                    <th>Periode 2</th>
                                    <th>Periode 3</th>
                                    <th>Periode 4</th>
                                    <th>Totaal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Frontend</td>
                                    <td>nvt</td>
                                    <td>nvt</td>
                                    <td>8.0</td>
                                    <td>7.4</td>
                                    <td>nvt</td>
                                </tr>
                                <tr>
                                    <td>Backend</td>
                                    <td>nvt</td>
                                    <td>nvt</td>
                                    <td>7.3</td>
                                    <td>8.5</td>
                                    <td>nvt</td>
                                </tr>
                                <tr>
                                    <td>OOP</td>
                                    <td>nvt</td>
                                    <td>nvt</td>
                                    <td>5.6</td>
                                    <td>4.3</td>
                                    <td>nvt</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h3 className="section-title">Skills</h3>
                        <table className="table">
                            <thead className='table-top'>
                                <tr>
                                    <th>Vakken</th>
                                    <th>Periode 1</th>
                                    <th>Periode 2</th>
                                    <th>Periode 3</th>
                                    <th>Periode 4</th>
                                    <th>Totaal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Firebase</td>
                                    <td>nvt</td>
                                    <td>nvt</td>
                                    <td>V</td>
                                    <td>nvt</td>
                                    <td>nvt</td>
                                </tr>
                                <tr>
                                    <td>Laravel</td>
                                    <td>nvt</td>
                                    <td>nvt</td>
                                    <td>G</td>
                                    <td>nvt</td>
                                    <td>nvt</td>
                                </tr>
                                <tr>
                                    <td>PHP</td>
                                    <td>nvt</td>
                                    <td>nvt</td>
                                    <td>G</td>
                                    <td>nvt</td>
                                    <td>nvt</td>
                                </tr>
                                <tr>
                                    <td>React</td>
                                    <td>nvt</td>
                                    <td>nvt</td>
                                    <td>V</td>
                                    <td>nvt</td>
                                    <td>nvt</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section className="info-section">
                    <div className='about'>
                        <h3 className="info-title">Informatie:</h3>
                        <p className="info-content">
                            Ut architecto harum qui suscipit tempora rem similique facilis ut
                            doloremeque dolorumque eum porro praesentium eum esse veritatis.
                            Qui sunt laborum qui repellat consequatur non fuga tempora quo
                            enim labore sed quos magnam aut dolor galisum rem voluptate sint?
                            Est voluptatibus sint sed laborum amet est illum na...
                        </p>
                    </div>
                    <div>
                        <button className="create-button">Maak traject aan</button>
                    </div>
                </section>
            </main>
        </div>
        </>
    );
};

export default StudentDetail;
