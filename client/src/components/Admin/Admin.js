import { Alert, Box, Button, Divider, Grid, Snackbar, TextField, Typography } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'

export default function Admin() {
    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const handleUpdateClick = () => {
        setLoading(true);
        const url = 'http://localhost:3030/users/add'
        axios.post(url, userData)
                .then((res) => {
                    setLoading(false)
                    setOpen(true)
                })
                .catch(err => {
                    setLoading(false)
                    console.log(err)
                })
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };
    const handleChangeL1 = (event) => {
        setUserData(prevState => ({
            ...prevState,
            address: [{
                ...prevState.address[0],
                line1: event.target.value
            }]
        }))
    }
    const handleChangeL2 = (event) => {
        setUserData(prevState => ({
            ...prevState,
            address: [{
                ...prevState.address[0],
                line2: event.target.value
            }]
        }))
    }
    const handleChangePin = (event) => {
        setUserData(prevState => ({
            ...prevState,
            address: [{
                ...prevState.address[0],
                pin: event.target.value
            }]
        }))
    }

    return (
        <Box m={5}>
             <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right'}}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    User Updated!
                </Alert>
            </Snackbar>
            <Typography variant="h3">User Creation Page</Typography>
            <Divider />
            <Grid
                container
                direction="column"
                rowSpacing={2}
                mt={3}
            >
                <Grid item>
                    <TextField
                        label="Username"
                        style= {{width: 400}}
                        value={userData.username || ''}
                        onChange={(event) => {setUserData({...userData, username: event.target.value})}}
                    ></TextField>
                </Grid>
                <Grid item>
                    <TextField
                        label="Password"
                        style= {{width: 400}}
                        value={userData.password || ''}
                        onChange={(event) => {setUserData({...userData, password: event.target.value})}}
                    ></TextField>
                </Grid>
                <Grid item>
                    <TextField
                        label="Email ID"
                        style= {{width: 400}}
                        value={userData.emailID || ''}
                        onChange={(event) => {setUserData({...userData, emailID: event.target.value})}}
                    ></TextField>
                </Grid>
                <Grid item>
                    <Typography variant="h5">Personal Information</Typography>
                </Grid>
                <Divider light />
                <Grid item>
                    <TextField
                        label="First Name"
                        style= {{width: 400}}
                        value={userData.firstName || ''}
                        onChange={(event) => {setUserData({...userData, firstName: event.target.value})}}
                    ></TextField>
                </Grid>
                <Grid item>
                    <TextField
                        label="Last Name"
                        style= {{width: 400}}
                        value={userData.lastName || ''}
                        onChange={(event) => {setUserData({...userData, lastName: event.target.value})}}
                    ></TextField>
                </Grid>
                <Grid item>
                    <TextField
                        label="Mobile Number"
                        style= {{width: 400}}
                        value={userData.mobileNo || ''}
                        onChange={(event) => {setUserData({...userData, mobileNo: event.target.value})}}
                    ></TextField>
                </Grid>
                <Grid item>
                    <LoadingButton
                        variant="contained"
                        style={{backgroundColor: "teal", width: 400}}
                        size="large"
                        loading={loading}
                        onClick={handleUpdateClick}
                    >
                        Add User
                    </LoadingButton>
                </Grid>
                <Grid item>
                    <Button
                        onClick={() => navigate(-1)}
                        variant="outlined"
                        startIcon={<ArrowBackIcon />}
                        style={{borderColor: "teal", width: 400}}
                        size="large"
                    >
                        Back to Dashboard
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}
