import React from 'react'
import {Grid, Paper, TextField, Button, Typography, Link} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Login=()=>{

    const paperStyle={padding :20,height: 500, width:280, margin:"20px"}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <h2 align='center'>Welcome</h2>
                <TextField label='Email' placeholder='Enter email' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                }
                    label="Remember me"
            />
            <Button type="submit" color="primary" variant="contained" fullWidth>Sign in</Button>
            <Typography>
                <Link href="#">
                    Forget password?
                </Link>
            </Typography>
                <Typography> No account?
                    <Link href="#">
                        Create One
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}
export default Login;