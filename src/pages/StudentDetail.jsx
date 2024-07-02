import { ArrowCircleLeftRounded } from '@mui/icons-material';
import { IconButton } from '@mui/joy';
import React from 'react';
import iconStyle from '../iconStyle';
import BackButton from '../components/backButton';

const StudentDetail = () => {


    const vakken = [
        {
            name: 'Frontend',
            periodes: [
                'nvt',
                'nvt',
                '',
                '',
            ],
        },
        {
            name: 'Backend',
            periodes: [
                'nvt',
                'nvt',
                '7.3',
                '8.5',
            ],
        },
        {
            name: 'OOP',
            periodes: [
                'nvt',
                'nvt',
                '5.6',
                '4.3',
            ],
        },

    ]

    const calcAvarage = (periodes) => {
        let total = 0;
        let count = 0;
        periodes.forEach(periode => {
            if (periode != '' && periode != null && periode != 'nvt') {
                total += parseFloat(periode);
                count++;
            }
        });
        return count == 0 ? '' : (total / count).toFixed(1);
    }

    const calcAvarageStrings = (periodes) => {
        let total = 0;
        let count = 0;
        periodes.forEach(periode => {
            if (periode != '' && periode != null && periode != 'nvt') {
                let number = 0;
                if (number = 'o') {
                    number = 5;
                } else if (number = 'v') {
                    number = 6;
                } else if (number = 'g') {
                    number = 8;
                }
                total += number;
                count++;
            }
        });
        return count == 0 ? '' : (total / count).toFixed(1);
    }

    return (
        <>
            <BackButton/>
            <div className='student-detail'>
                <header className="header">
                    <div className="student-info">
                        <img src="https://via.placeholder.com/50" alt="Profile" className="profile-img" />
                        <div className="student-name">
                            <h1 className="name">Jollie van huizen</h1>
                            <p className="details">1032353 - TIA4V2c</p>
                        </div>
                    </div>
                    <button className="edit-button">Edit</button>
                </header>
                <main className="main">
                    {/* Table Sections */}
                    <section className="tables-section">
                        <div className='table-section'>
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
                                    {vakken.map((vak, index) => (
                                        <tr>
                                            <td>{vak.name}</td>
                                            {vak.periodes.map((periode, subindex) => (
                                                <td>
                                                    {periode}
                                                    <div className={periode == null || periode == '' ? "btn btn--insert" : "btn btn--icon"} data-id={"periode" + subindex}>
                                                        {periode == null || periode == '' ?
                                                            <>
                                                                <i className="vlx-icon vlx-icon--plus"></i>
                                                                <p>Invoegen</p>
                                                            </>
                                                            :
                                                            <i className="vlx-icon vlx-icon--pencil"></i>
                                                        }
                                                    </div>
                                                </td>
                                            ))}
                                            <td>{calcAvarage(vak.periodes)}</td>
                                        </tr>

                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='table-section'>
                            <h3 className="section-title">Skills</h3>
                            <table className="table">
                                <thead className='table-top'>
                                    <tr>
                                        <th>Skills</th>
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
                            <h3 className="about__title">Informatie:</h3>
                            <p>
                                Ut architecto harum qui suscipit tempora rem similique facilis ut doloremque doloremque eum porro praesentium eum esse veritatis. Qui sunt laborum qui repellat consequatur non fuga tempora quo enim labore sed quos magnam aut dolor galisum rem voluptate sint? Est voluptatibus sint sed laborum amet est illum natus aut quis eligendi quo cupiditate corrupti qui culpa quidem non quia deleniti. Quo itaque exercitationem et labore perferendis non placeat enim ab esse nisi eum officiis placeat. Ut architecto harum qui suscipit tempora rem similique facilis ut doloremque doloremque eum porro praesentium eum esse veritatis. Qui sunt laborum qui repellat consequatur non fuga tempora quo enim labore sed quos magnam aut dolor galisum rem voluptate sint? Est voluptatibus sint sed laborum amet est illum natus aut quis eligendi quo cupiditate corrupti qui culpa quidem non quia deleniti. Quo itaque exercitationem et labore perferendis non placeat enim ab esse nisi eum officiis placeat.
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
