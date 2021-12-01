import React from 'react'
import {Grid, Paper, TextField, Button, Typography, Link} from '@material-ui/core';
import Title from '../Title';
import './Signup.css';

const Signup=()=>{

    return(
        <div>
            <Title/>
            <Grid className="centered">
                <Paper id="signup-paper" elevation={5}>
                    <h6>Get Started with Us Today!</h6>
                    <TextField label='First Name' variant="outlined" size="small"
                               placeholder='Enter first name' margin="normal" fullWidth required/>

                    <TextField label='Last Name' variant="outlined" size="small"
                               placeholder='Enter last name' margin="normal" fullWidth required/>

                    <TextField label='Email' variant="outlined" size="small"
                               placeholder='Enter email' margin="normal" fullWidth required/>

                    <TextField label='Password' variant="outlined" size="small"
                               placeholder='Enter password' margin="normal" type='password' fullWidth required/>

                    <TextField label='Confirm Password' variant="outlined" size="small"
                               placeholder='Enter password' margin="normal" type='password' fullWidth required/>

                    <Button id="signup-button" type="submit" variant="contained" fullWidth>Sign up</Button>

                    <Typography className="spacing">
                        Already have an account?
                    </Typography>

                    <Button id="login-button" href='login' className = "login-button" type="submit"
                            variant="contained" fullWidth>Log in</Button>
                </Paper>
            </Grid>
        </div>
    )
}
export default Signup;