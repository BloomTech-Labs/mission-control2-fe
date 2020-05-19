import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';
// import ProgramList from '../ProgramList/ProgramList';
import PersonList from '../PersonsList/PersonsList';
import { Grid } from '@material-ui/core';


function Dash() {
    return(
       <Grid container direction='column'>
           <Grid item >
               <HeaderNav/>
               </Grid>
           <Grid item container>
               <PersonList/>
               
               </Grid>
       </Grid>
    )
};

export default Dash;