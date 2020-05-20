import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderNav from '../HeaderNav/HeaderNav';
// import ProgramList from '../ProgramList/ProgramList';
import PersonList from '../PersonsList/PersonsList';
import { Grid } from '@material-ui/core';


function Dash(props) {
    const [user, setUser] = useState({})
    useEffect(()=>{
axios.get(`http://localhost:3232/api/persons/${props.match.params.id}`)
.then(res => {
    setUser(res.data)})
    .catch(err => console.error(err))
}, []);

    return(
       <Grid container direction='column'>
           <Grid item >
               <HeaderNav user={user} setUser={setUser} />
               </Grid>
           <Grid item container>
               
               
               </Grid>
       </Grid>
    )
};

export default Dash;