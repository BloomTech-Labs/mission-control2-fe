import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Del from './Del'
import Edit from './Edit'
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
const Card = (data) => {
    const classes = useStyles();
    const push = (e) => {
        e.preventDefault()
        console.log('got here boss!')
    }
    return (
        <div className={classes.cards}  >
            <Grid container direction='row' className={classes.ProgramListView} onClick={push}>
                <h3 className={classes.ProgramListData}>Project Name: {data.name}</h3>
            </Grid>
            <Del props={data.id} />
            <Edit props={data.id} />
        </div>
    )
};

export default Card;