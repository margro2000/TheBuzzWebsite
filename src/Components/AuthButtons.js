import React from 'react';
import Button from '@mui/material/Button';
import './AuthButtons.css';

const AuthButtons =()=> {

    return (
        <div className="auth-buttons">
            <Button id="signin" href='/login' size="large">Sign In</Button>
            <Button id="getstarted" href='/signup' variant="contained" size="large">Get Started</Button>
        </div>
    );
}

export default AuthButtons;
