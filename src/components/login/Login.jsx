import React from 'react';
import { Redirect } from 'react-router-dom';
import Form from './Form';
import { useOktaAuth } from '@okta/okta-react';

const Login = ({ issuer }) => {
    const { authState } = useOktaAuth();

    if (authState.isPending) {
        return <div>Loading...</div>;
    }
    //just pulls up form. could be condensed if needed so it isnt too dry.
    return authState.isAuthenticated ?
        <Redirect to={{ pathname: '/' }} /> :
        <Form issuer={issuer} />;
};

export default Login;