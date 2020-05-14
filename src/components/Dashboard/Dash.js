import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';
import ProgramList from '../ProgramList/ProgramList';
import { Grid } from '@material-ui/core';



function Dash() {
    return(
       <Grid container direction='column'>
           <Grid item >
               <HeaderNav/>
               </Grid>
           <Grid item container>
               <ProgramList/>
               </Grid>
       </Grid>
    )
};

export default Dash;