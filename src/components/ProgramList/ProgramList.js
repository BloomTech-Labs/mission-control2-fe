import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProgramAdd from './ProgramAdd';
import ProgramCard from './ProgramCard';


const ProgramList = () => {
    const [data, setData] = useState([])    
    useEffect(() => {
    axios
        .get('http://localhost:3232/api/programs/')
        .then(res => {
            setData(res.data)
        })
        .catch(err =>{console.error('Axios error', err)});
    }, [data])

    return (
        <div>
        <ProgramAdd />
           {data.map((data) => {
               return <ProgramCard data={data} id={data.id} name={data.name}/>;
           })}
        </div>
    )
};

export default ProgramList;