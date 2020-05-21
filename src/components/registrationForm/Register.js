import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { AppBar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    toolbarMenu: {
        display: 'flex',
        justifyContent: 'center'
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
//uses state to keep the info for the user, then sends it to the server to be made, which returns the info and allows them to go to the newly created personal dashboard
const Register = () => {
    const classes = useStyles();
    const history = useHistory()
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: '',
    });
    const handleChanges = (e) => {
        setNewUser({
            ...newUser, [e.target.name]: e.target.value
        })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:3232/api/auth/register', newUser)
            .then(res => {
                console.log('***', res.data)
                localStorage.setItem('token', res.data.token)
                history.push(`/dashboard/${res.data.id}`)
            })
            .catch(err => console.error(err))
    };
    return (
        <form onSubmit={handleSubmit} className={classes.root} autoComplete="off">
            <AppBar position="static">
                    <Typography variant="h4" className={classes.title}>
                        Register
                    </Typography>
                </AppBar>
            <TextField
                    name="email" type="text"
                    label='Email'
                    value={newUser.email}
                    onChange={handleChanges} />
                <br />
            <TextField
                    name="name" type="text"
                    label='Name'
                    value={newUser.name}
                    onChange={handleChanges} />
                <br/>
            <TextField
                    name="password" type="password"
                    label='Password'
                    value={newUser.password}
                    onChange={handleChanges} />
                <br/>
            <Button onClick={handleSubmit} variant="contained" color="primary">
                    Submit
                    </Button>
        </form>
    );
};
export default Register;