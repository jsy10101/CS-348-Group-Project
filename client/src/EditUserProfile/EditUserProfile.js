import { Alert, Box, Divider, Grid, Snackbar, TextField, Typography } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

export default function EditUserProfile() {
    const { id } = useParams()
    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const url = "http://localhost:3030/users/" + id
        try {
            axios.get(url).then(res => {
                const data = res.data
                setUserData(data);
            })
        } catch(err) {
            console.err(err);
        }
    }, [id])

    const handleUpdateClick = () => {
        setLoading(true);
        const url = 'http://localhost:3030/users/' + id
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
    const handleChangeL3 = (event) => {
        setUserData(prevState => ({
            ...prevState,
            address: [{
                ...prevState.address[0],
                line3: event.target.value
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
            <Typography variant="h3">Edit User Information</Typography>
            <Divider />
            <Grid
                container
                direction="column"
                rowSpacing={2}
                mt={3}
            >
                <Grid item>
                    <TextField
                        disabled
                        label="Username"
                        style= {{width: 400}}
                        value={userData.username || ''}
                    ></TextField>
                </Grid>
                <Grid item>
                    <TextField
                        disabled
                        label="Email ID"
                        style= {{width: 400}}
                        value={userData.emailID || ''}
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
                    <Typography variant="h5">Address</Typography>
                </Grid>
                <Divider light />
                <Grid item>
                    <TextField
                        label="Line 1"
                        style= {{width: 400}}
                        value={(userData.address && userData.address[0].line1) || ''}
                        onChange={handleChangeL1}
                    ></TextField>
                </Grid>
                <Grid item>
                    <TextField
                        label="Line 2"
                        style= {{width: 400}}
                        value={(userData.address && userData.address[0].line2) || ''}
                        onChange={handleChangeL2}
                    ></TextField>
                </Grid>
                <Grid item>
                    <TextField
                        label="Line 3"
                        style= {{width: 400}}
                        value={(userData.address && userData.address[0].line3) || ''}
                        onChange={handleChangeL3}
                    ></TextField>
                </Grid>
                <Grid item>
                    <TextField
                        label="Pin Code"
                        style= {{width: 400}}
                        value={(userData.address && userData.address[0].pin) || ''}
                        onChange={handleChangePin}
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
                        Update
                    </LoadingButton>
                </Grid>
            </Grid>
        </Box>
    )
}
