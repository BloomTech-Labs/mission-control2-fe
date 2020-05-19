import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PersonAdd from './PersonAdd';
import PersonCard from './PersonCard';


const PersonsList = () => {
    const [data, setData] = useState([])    
    useEffect(() => {
    axios
        .get('http://localhost:3232/api/persons')
        .then(res => {
            setData(res.data)
        })
        .catch(err =>{console.error('Axios error', err)});
    }, [data])

    return (
        <div>
        <PersonAdd />
           {data.map((data) => {
               return <PersonCard data={data} email={data.email} name={data.name}/>;
           })}
        </div>
    )
};

export default PersonsList;