import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
//uses state to keep the info for the user, then sends it to the server to be made, which returns the info and allows them to go to the newly created personal dashboard
const Register = () => {
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
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={newUser.email}
                    onChange={handleChanges}
                />
            </div>
            <div className="form-element">
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={newUser.name}
                    onChange={handleChanges}
                />
            </div>
            <div className="form-element">
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={newUser.password}
                    onChange={handleChanges}
                />
            </div>
            <button type="submit" value="Submit">Submit</button>
        </form>
    );
};
export default Register;