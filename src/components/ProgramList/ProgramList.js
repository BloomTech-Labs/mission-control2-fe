import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/styles';
import ProgramAdd from './ProgramAdd';
import ProgramCard from './ProgramCard';

const useStyles = makeStyles({
    root: {
        //   border: '1px solid red',
        padding: '2%',
        width: '100%',
        height: '85vh'
    },
});


const ProgramList = () => {
    const classes = useStyles();
    const [data, setData] = useState([])
    //problem area
    useEffect(() => {
        axios
            .get(`http://localhost:3232/api/persons/${localStorage.getItem('id')}/project`)
            .then(res => {
                let arr = [];
                res.data.forEach(e =>
                    arr.push(e.programId))
                return arr;
            })
            .then(arr => {
                axios
                    .get(`http://localhost:3232/api/programs`)
                    .then(res => {
                        let booty = res.data.filter(guru => arr.includes(guru.id))
                        setData(booty)
                    })
            })
            .catch(err => { console.error('Axios error', err) })
            .finally(window.location.reload)
    }, [data.length])

    return (
        <div className={classes.root}>
            <ProgramAdd />
            {data.map((data) => {
                return <ProgramCard data={data} id={data.id} name={data.name} />;
            })}
        </div>
    )
};

export default ProgramList;