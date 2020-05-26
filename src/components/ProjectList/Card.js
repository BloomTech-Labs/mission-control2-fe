import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(() => ({
    ProgramListView: {
        display: 'flex',
        margin: '5%',
        justifyContent: 'space-between'
    },
    ProgramListData: {
        marginLeft: '40px',
    }
}));
const ProgramCard = (data) => {
    const classes = useStyles();
    const push = (e) => {
        e.preventDefault()
        console.log('got here boss!')
    }
    return (
        <div className={classes.cards} onClick={push} >
            <Grid container direction='row' className={classes.ProgramListView}>
                <h3 className={classes.ProgramListData}>ID: {data.id}</h3>
                <h3 className={classes.ProgramListData}>Program Name: {data.name}</h3>
            </Grid>
        </div>
    )
};

export default Card;