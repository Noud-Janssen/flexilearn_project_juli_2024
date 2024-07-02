// App.js
import { Settings } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/joy';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import iconStyle from '../iconStyle';

const App = () => {


  const navigate = useNavigate();


  return (
    <div className="home">
      <div className="container">
        <header className="header">
          <Stack
            direction="row"
            justifyContent="space-between"
          >
            <h1 className="title">Hallo {`{Docent}`}</h1>
            <IconButton
              onClick={() => navigate("/klassen")}
              sx={Object.assign(iconStyle,{ marginLeft: "60px" })}
            >
              <Settings/>
            </IconButton>
          </Stack>
          <input type="text" className="search-input" placeholder="Zoeken..." />
        </header>
        <main className="main">
          {Array.from({ length: 30 }).map((_, index) => (
            <Link to={'/StudentDetail'} key={index} className="card">
              <img
                src="https://via.placeholder.com/50"
                alt="Profile"
                className="profile-img"
              />
              <div className="card-content">
                <h2 className="name">Jollie van huizen</h2>
                <p className="id">1032353</p>
                <p className="class">TIA4V2c</p>
              </div>
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
};

export default App;