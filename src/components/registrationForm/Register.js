import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const Register = () =>{

    const history = useHistory()
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChanges = (e) => {
        // console.log(newUser)
        setNewUser({
            ...newUser, [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('******** axios', newUser)
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
                <button type="submit" >Submit</button>
            </form>
        );
};

export default Register;