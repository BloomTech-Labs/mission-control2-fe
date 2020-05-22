import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles, TextField } from "@material-ui/core";
import AutoComplete from "@material-ui/lab/Autocomplete";
// import { SearchIcon } from "@material-ui/Icons"

// const Projects = [
//   "Project Redux",
//   "Project Graphql",
//   "Project React",
//   "Project Node.js",
// ];

const useStyles = makeStyles((theme) => ({
  inputField: {
    width: "60%",
    margin: "2% 0",
  },
  root: {
    textAlign: "center",
  },
}));

const SearchBar = () => {
  const classes = useStyles();

  //lok at the input value an filter what the user will input
  const [search, setSearch] = useState("");

  //data is grabbing the res from the request and then map through it under return
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3232/api/programs`).then((res) => {
      // console.logging ("programs", res)
      console.log(res);

      //setting programs to data and filter current state with bth lowercase and upppercase
      const programs = res.data.filter((program) =>
        program.name.toLowerCase().includes(search.toLowerCase())
      );
      setData(programs);
    });
  }, [search]);

  //a function that watches what users put in the input element
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={classes.root}>
      {/* <AutoComplete
        id="autocomplete"
        options={name}
        renderInput={(params) => (
         
        )}
      /> */}
      <TextField
        // {...params}
        className={classes.inputField}
        variant="outlined"
        placeholder="Search.."
        value={search}
        onChange={handleChange}
      />
      <div>
        {data.map((data) => {
          return <div key={data.id}>{data.name}</div>;
        })}
      </div>
    </div>
  );
};

export default SearchBar;
