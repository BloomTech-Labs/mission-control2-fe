import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';
import Del from './Del'
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
    const history = useHistory();
    const push = (e) => {
        e.preventDefault()
        console.log('got here boss!')
        history.push(`/product/${data.id}`)
        localStorage.setItem('ductid', data.id)
    }
    return (
        <div className={classes.cards}  >
            <Grid container direction='row' className={classes.ProgramListView} onClick={push}>
                <h3 className={classes.ProgramListData}>Product: {data.name}</h3>
            </Grid>
            <Del props={data.id} />
        </div>
    )
};

export default Card;