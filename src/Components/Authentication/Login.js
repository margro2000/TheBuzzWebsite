import React from 'react'
import {Grid, Paper, TextField, Button, Typography, Link} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Title from '../Title';
import './Login.css';
// import { Link, useNavigate, useLocation } from "react-router-dom";

const Login=()=>{
    return(
        <div>
            <Title/>
            <Grid className="centered">
                <Paper id="login-paper" elevation={5}>
                    <TextField label="Email" variant="outlined" size="small" placeholder="Enter email"
                               margin="normal" fullWidth required/>

                    <TextField label="Password" variant = "outlined" size="small" placeholder="Enter password"
                               type="password" margin="normal" fullWidth required/>

                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Remember me"
                    />
                    <Button id="login-button" type="submit"
                            variant="contained" fullWidth>Log in</Button>
                    <Typography className="spacing">
                        <Link href="#">
                            Forgot password?
                        </Link>
                    </Typography>
                    <Typography className="spacing">
                        or
                    </Typography>
                    <Button id="signup-button" href='/signup' type="submit"
                            variant="contained" fullWidth>Create New Account</Button>
                </Paper>
            </Grid>
        </div>
    )
}
export default Login;