import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Add from './Add';
import Card from './Card';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    cards: {
        display: 'flex',
        // border: '1px solid red'
    },
    root: {
        // border: '1px solid red',
        padding: '2%',
        width: '100%',
        height: '85vh'
    }
}));

const List = () => {
    const classes = useStyles();
    const [data, setData] = useState([])
    //problem area
    useEffect(() => {
        const id = localStorage.getItem('gramid')
        axios
            .get(`http://localhost:3232/api/persons/${localStorage.getItem('id')}/project`)
            .then(res => {
                let arr = [];
                console.log(res.data)
                res.data.forEach(e =>
                    arr.push(e.productId))
                return arr;
            })
            .then(arr => {
                axios
                    .get(`http://localhost:3232/api/programs/${id}/products`)
                    .then(res => {
                        console.log(arr)
                        let booty = res.data.filter(guru => arr.includes(guru.id))
                        setData(booty)
                    })
            })
            .catch(err => { console.error('Axios error', err) })
            .finally(window.location.reload)
    }, [data.length])
    return (
        <div className={classes.root}>
            <Add />
            {data.map((data) => {
                return <Card data={data} id={data.id} name={data.name} />;
            })}
        </div>
    )
};

export default List;