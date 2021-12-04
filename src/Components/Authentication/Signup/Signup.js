import React, {useState} from 'react'
import {Grid, Paper, TextField, Button, Typography} from '@material-ui/core';
import Title from '../../Title';
import './Signup.css';

const Signup=()=>{

    const[firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div>
            <Title/>
            <Grid className="centered">
                <Paper id="signup-paper" elevation={5}>
                    <h6>Get Started with Us Today!</h6>
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <TextField 
                            onChange={(e) => setFirstName(e.target.value)}
                            label='First Name' 
                            variant="outlined" 
                            size="small"
                            placeholder='Enter first name' 
                            margin="normal" 
                            fullWidth 
                            required/>

                        <TextField 
                            onChange={(e) => setLastName(e.target.value)}
                            label='Last Name' 
                            variant="outlined" 
                            size="small"
                            placeholder='Enter last name' 
                            margin="normal" 
                            fullWidth 
                            required/>

                        <TextField 
                            onChange={(e) => setEmail(e.target.value)}
                            label='Email' 
                            variant="outlined" 
                            size="small"
                            placeholder='Enter email' 
                            margin="normal" 
                            fullWidth 
                            required/>

                        <TextField 
                            onChange={(e) => setPassword(e.target.value)}
                            label='Password' 
                            variant="outlined" 
                            size="small"
                            placeholder='Enter password' 
                            margin="normal" 
                            type='password' 
                            fullWidth 
                            required/>

                        <TextField 
                            label='Confirm Password' 
                            variant="outlined" 
                            size="small"
                            placeholder='Enter password' 
                            margin="normal" 
                            type='password' 
                            fullWidth 
                            required/>

                        <Button 
                            id="signup-button" 
                            type="submit" 
                            variant="contained" 
                            fullWidth>Sign up
                        </Button>

                        <Typography className="spacing">
                            Already have an account?
                        </Typography>

                        <Button 
                            id="login-button" 
                            href='login' 
                            className = "login-button" 
                            type="submit"
                            variant="contained" 
                            fullWidth>Log in
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    )
}
export default Signup;