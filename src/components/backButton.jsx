// App.js
import { ArrowLeft, Settings } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/joy';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import iconStyle from '../iconStyle';

const BackButton = (props) => {

    let location = "/";

    if (props.location) {
        location = props.location;
    }

    const style = {
        position: "absolute",
        top: "10px",
        left: "10px",
        backgroundColor: "var(--background-light);",
        color: "#a84af0;",
        ":hover": {
            backgroundColor: "#a84af0;",
            color: "var(--background-dark);",
        }
    }


    const navigate = useNavigate();

    return (
        <IconButton
            onClick={() => navigate(location)}
            sx={style}
        >
            <ArrowLeft />
        </IconButton>
    )

};

export default BackButton;
