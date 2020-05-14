import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles (() => ({
    ProgramListView: {
        display: 'flex',
        margin: '5%',
        // border: '1px solid red',
        justifyContent: 'space-between'
      },
    ProgramListData: {
        // border: '1px solid blue',
        marginLeft: '40px',
    }
}));

const ProgramCard = (data) => {
    const classes = useStyles();
    return (
        <div >
            <Grid container direction='row' className={classes.ProgramListView}>
                <h3 className={classes.ProgramListData}>ID: {data.id}</h3>
                <h3 className={classes.ProgramListData}>Program Name: {data.name}</h3>
            </Grid>
        </div>
    )
};

export default ProgramCard;