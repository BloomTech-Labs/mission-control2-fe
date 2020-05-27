import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Add from './Add';
import Card from './Card';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    cards: {
        display: 'flex',
        border: '1px solid red'
    }
}));

const List = () => {
    const [data, setData] = useState([])
    //problem area
    useEffect(() => {

        const id = localStorage.getItem('ductid')
        axios
            .get(`http://localhost:3232/api/products/${id}/projects`)
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
            <Add />
            {data.map((data) => {
                return <Card data={data} id={data.id} name={data.name} />;
            })}
        </div>
    )
};

export default List;