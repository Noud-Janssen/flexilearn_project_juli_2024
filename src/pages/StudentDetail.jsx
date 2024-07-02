import React from 'react';
import { useState } from 'react';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import { Textarea, Input } from '@mui/joy';
import MenuButton from '@mui/joy/MenuButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import Dropdown from '@mui/joy/Dropdown';
import BackButton from '../components/backButton';

const StudentDetail = () => {
    const [open, setOpen] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
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
                <button className="edit-button" onClick={() => setOpenEditModal(true)} >Edit</button>
                <Modal
                    aria-labelledby="modal-title"
                    aria-describedby="modal-desc"
                    open={openEditModal}
                    onClose={() => setOpenEditModal(false)}
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <Sheet
                        variant="outlined"
                        sx={{
                            maxWidth: 500,
                            borderRadius: 'md',
                            p: 3,
                            boxShadow: 'lg',
                            width: '700px',
                            height: '500px',
                            backgroundColor: '#2c2c2c',
                            borderColor: '#6e6eb4',
                        }}
                    >
                        <div className='modal-header'>
                            <ModalClose variant="plain" sx={{
                                m: 1,
                                ":hover": {
                                    color: 'White',
                                    backgroundColor: 'transparent'
                                }
                            }} />
                            <h4
                                component="h2"
                                id="modal-title"
                                level="h4"
                                textColor="inherit"
                                fontWeight="lg"
                                mb={1}
                                className='modal-title'
                            >
                                Bewerk Student
                            </h4>
                        </div>
                        <div className='modal-body'>

                            <p id="modal-desc" textColor="text.tertiary">
                                <p className='modal-title'>Naam</p>
                                <Input />
                                <p className='modal-title'>Klas</p>
                                <Dropdown>
                                    <MenuButton sx={{
                                        color: 'white', ":hover": {
                                            backgroundColor: 'transparent',
                                        }
                                    }} endDecorator={<ArrowDropDown />}>- Kies een klas -</MenuButton>
                                    <Menu sx={{ minWidth: 160, '--ListItemDecorator-size': '24px', zIndex: '12397912873', }}>
                                        <MenuItem
                                            onClick={() => {
                                                const nextIndex = SIZES.indexOf(size) - 1;
                                                const value = nextIndex < 0 ? SIZES[SIZES.length - 1] : SIZES[nextIndex];
                                                setSize(value);
                                            }}
                                        >
                                            TIA4V2c
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() => {
                                                const nextIndex = SIZES.indexOf(size) + 1;
                                                const value = nextIndex > SIZES.length - 1 ? SIZES[0] : SIZES[nextIndex];
                                                setSize(value);
                                            }}
                                        >
                                            TIA4V2d

                                        </MenuItem>
                                    </Menu>
                                </Dropdown>
                            </p>
                        </div>
                    </Sheet>
                </Modal>
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
                    <div className='tu-madre-es-un-puta'>
                        <button className="create-button" onClick={() => setOpen(true)} >Maak traject aan</button>
                        <Modal
                            aria-labelledby="modal-title"
                            aria-describedby="modal-desc"
                            open={open}
                            onClose={() => setOpen(false)}
                            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        >
                            <Sheet
                                variant="outlined"
                                sx={{
                                    maxWidth: 500,
                                    borderRadius: 'md',
                                    p: 3,
                                    boxShadow: 'lg',
                                    width: '700px',
                                    height: '500px',
                                    backgroundColor: '#2c2c2c',
                                    borderColor: '#6e6eb4',
                                }}
                            >
                                <div className='modal-header'>
                                    <ModalClose variant="plain" sx={{
                                        m: 1,
                                        ":hover": {
                                            color: 'White',
                                            backgroundColor: 'transparent'
                                        }
                                    }} />
                                    <h4
                                        component="h2"
                                        id="modal-title"
                                        level="h4"
                                        textColor="inherit"
                                        fontWeight="lg"
                                        mb={1}
                                        className='modal-title'
                                    >
                                        Maak Traject
                                    </h4>
                                </div>
                                <div className='modal-body'>

                                    <p id="modal-desc" textColor="text.tertiary">
                                        <p>  </p>
                                        <Textarea minRows={2} />
                                    </p>
                                </div>
                            </Sheet>
                        </Modal>
                    </div>
                </section>
            </main>
        </div>
        </>
    );
};

export default StudentDetail;
