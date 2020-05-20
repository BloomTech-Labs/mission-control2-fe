import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
const Login = () => {
    //TODO: comment well
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
    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .get('http://localhost:3232/api/auth/register', newUser)
            .then(res => {
                console.log('***', res.data)
                localStorage.setItem('token', res.data.token)
                history.push(`/dashboard/${res.data.id}`)
            })
            .catch(err => console.error(err))
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    Username:
        <input
                        id="username" type="text"
                        value={newUser.username}
                        onChange={handleChanges} />
                </label>
                <label>
                    Password:
        <input
                        id="password" type="password"
                        value={newUser.password}
                        onChange={handleChanges} />
                </label>
                <input id="submit" type="submit" value="Submit" />
            </form>
            <p className='text'> Don't have a login? sign up <Link to={'register'}>here!</Link></p>
        </div>
    );
};
export default Login;