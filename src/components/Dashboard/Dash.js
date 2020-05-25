import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderNav from '../HeaderNav/HeaderNav';
import { Grid } from '@material-ui/core';
import ProgramList from '../ProgramList/ProgramList';
function Dash(props) {
    //does a axios call to get the user, then calls and changes the header to match it
    const [user, setUser] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:3232/api/persons/${props.match.params.id}`)
            .then(res => {
                console.log('***')
                setUser(res.data)
            })
            .catch(err => console.error(err))
    }, []);
    return (
        <Grid container direction='column'>
            <Grid item >
                <HeaderNav user={user} setUser={setUser} />
            </Grid>
            <Grid item container>
                <ProgramList />
            </Grid>
        </Grid>
    )
};
export default Dash;