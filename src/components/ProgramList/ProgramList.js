import React, { useState, useEffect } from "react";
import axios from "axios";
import ProgramCard from "./ProgramCard";

const ProgramList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5432/api/programs/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Axios error", err);
      });
  }, []);

  return (
    <div>
      {data.map((data) => {
        return <ProgramCard data={data} id={data.id} name={data.name} />;
      })}
    </div>
  );
};

export default ProgramList;
