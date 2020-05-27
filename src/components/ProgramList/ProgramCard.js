import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';
import ProgramDel from './ProgramDel';
import ProgramEdit from './ProgramEdit';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const useStyles = makeStyles((theme) => ({
    ProgramListView: {
        display: 'flex',
        margin: '5%',
    },
    cards: {
        display: 'flex',
        margin: '1%',
        // border: '1px solid blue'
    }
}));
const ProgramCard = (data) => {
    
    const history = useHistory()
    const classes = useStyles();
    const push = (e) => {
        e.preventDefault()
        console.log('got here boss!')
        history.push(`/program/${data.id}`)
        localStorage.setItem('gramid', data.id)
    }
    return (
        <List component="nav" className={classes.cards} aria-label="mailbox folders" >
            <ListItem container direction='row' onClick={push} >
               
                <h2 className={classes.ProgramListData}>Program Name: {data.name}</h2>

            </ListItem>
            <ProgramDel props={data.id} />
            <ProgramEdit props={data.id} />
        </List>
    )
};

export default ProgramCard;