import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { AppBar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    toolbarMenu: {
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center'
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        }
    },
    login: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center'
    }

}));

const Login = () => {
    const classes = useStyles();
    //sets state and the usehistory
    const history = useHistory()
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    //allows you to change visuals when adding info to form
    const handleChanges = (e) => {
        e.preventDefault();
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    };
    //server call to allow you to log in
    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:3232/api/auth/login', user)
            .then(res => {
                console.log('***', res.data)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('id', res.data.id)
                history.push(`/dashboard/${res.data.id}`)
            })
            .catch(err => console.error(err))


    };
    //form with a link to sign up
    return (
        <div>
            <div className={classes.login}>
                <form onSubmit={onSubmit} className={classes.root} autoComplete="off">
                    <AppBar position="static" >
                        <Typography variant="h4" className={classes.title}>
                            Login
                    </Typography>
                    </AppBar>
                    <TextField
                        name="email" type="text"
                        label='Email'
                        value={user.email}
                        onChange={handleChanges} />
                    <br />

                    <TextField
                        name="password" type="password"
                        label='Password'
                        value={user.password}
                        onChange={handleChanges} />
                    <br />
                    <Button onClick={onSubmit} variant="contained" color="primary">
                        Submit
                    </Button>
                    <p className='text'> Don't have a login? sign up <Link to='/register'>here!</Link></p>
                </form>
            </div>
        </div>
    )
};
export default Login;