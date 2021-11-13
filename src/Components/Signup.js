import React from 'react'
import {Grid, Paper, TextField, Button, Typography, Link} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Signup=()=>{

    const paperStyle={padding :20,height: 500, width:280, margin:"20px"}
    return(
        <Grid container>
            <Paper elevation={10} style={paperStyle}>
                <h2 align='center'>Get started with us today!</h2>
                <TextField label='First Name' placeholder='Enter first name' fullWidth required/>
                <TextField label='Last Name' placeholder='Enter last name' fullWidth required/>
                <TextField label='Email' placeholder='Enter email' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <TextField label='Confirm Password' placeholder='Enter password' type='password' fullWidth required/>
                <Button type="submit" color="primary" variant="contained" fullWidth>Sign up</Button>
                <Typography> Already have an account?
                    <Link href="#">
                        Login here
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}
export default Signup;