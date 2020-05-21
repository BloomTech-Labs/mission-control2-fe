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
        justifyContent: 'center'
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
}));

const Login = () => {
    const classes = useStyles();
    //TODO: comment well
    const history = useHistory()
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const handleChanges = (e) => {
        e.preventDefault();
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    };
    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:3232/api/auth/login', user)
            .then(res => {
                console.log('***', res.data)
                localStorage.setItem('token', res.data.token)
                history.push(`/dashboard/${res.data.id}`)
            })
            .catch(err => console.error(err))

    
    };
    return (
        <div>
            <form onSubmit={onSubmit} className={classes.root} noValidate autoComplete="off">
            <AppBar position="static">
                    <Typography variant="h4" className={classes.title}>
                    Login
                    </Typography>
                </AppBar>
        <TextField
                        name="name" type="text"
                        label='Name'
                        value={user.name}
                        onChange={handleChanges} />
                        <br/>
                
        <TextField
                        name="password" type="password"
                        label='Password'
                        value={user.password}
                        onChange={handleChanges} />
                    <br/>
                <Button onClick={onSubmit} variant="contained" color="primary">
                    Submit
                    </Button>
            </form>
            <p className='text'> Don't have a login? sign up <Link to='/register'>here!</Link></p>
        </div>
    )
};
export default Login;