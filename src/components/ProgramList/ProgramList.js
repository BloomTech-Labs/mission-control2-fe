import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProgramAdd from './ProgramAdd';
import ProgramCard from './ProgramCard';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    cards: {
        display: 'flex',
        border: '1px solid red'
    }
}));

const ProgramList = () => {
    const classes = useStyles();
    const [data, setData] = useState([])
    //problem area
    useEffect(() => {

        const id = localStorage.getItem('id')
        axios
            .get(`http://localhost:3232/api/programs`)
            .then(res => {
                console.log('well there is your problem!')
                setData(res.data)
                console.log(data.length)
            })
            .catch(err => { console.error('Axios error', err) })
            .finally(window.location.reload)
    }, [data.length])

    return (
        <div>
            <ProgramAdd />
            {data.map((data) => {
                return <ProgramCard data={data} id={data.id} name={data.name} />;
            })}
        </div>
    )
};

export default ProgramList;