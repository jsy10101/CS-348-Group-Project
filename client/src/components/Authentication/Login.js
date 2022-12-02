import React, { useState } from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setLoginData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const handleClick = async () => {
        try {
            const response = await axios.post('http://localhost:3030/users/authenticate/login', {username: loginData.username, password: loginData.password});
            if(response.status === 200) {
                navigate("/dashboard/" + response.data);
            }
        } catch(err) {
            console.error(err);
        }
    }

    const paperStyle={padding :20,width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'24px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                     <Typography variant="h5">Sign In</Typography>
                </Grid>
                <TextField
                    name="username"
                    onChange={handleChange}
                    label='Username'
                    placeholder='Enter username'
                    variant="standard"
                    fullWidth required
                    value={loginData.username}
                />
                <TextField
                    name="password"
                    label='Password'
                    onChange={handleChange}
                    placeholder='Enter password'
                    type='password'
                    variant="standard"
                    value={loginData.password}
                    fullWidth
                    required
                />
                {/* <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 /> */}
                <Button
                    onClick={handleClick}
                    type='submit'
                    color='primary'
                    variant="contained"
                    style={btnstyle}
                    fullWidth
                >
                    Sign in
                </Button>
            </Paper>
        </Grid>
    )
}