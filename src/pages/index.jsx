import React from 'react'
import { Grid,Paper, TextField, Button, Typography,Link } from '@material-ui/core'
import { Link as Linker } from 'react-router-dom';

const Login = () => {

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h1>E-Commerce Platform</h1>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' variant="outlined" fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' variant="outlined" fullWidth required/>

                <Button component={Linker} to="/products" type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography > Do you have an account? 
                    <Link href="./404" >
                        Sign Up 
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login