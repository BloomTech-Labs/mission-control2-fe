import React, { useState, useEffect } from "react";
import axios from "axios";
import { InputBase, makeStyles, TextField } from "@material-ui/core";
import AutoComplete from "@material-ui/lab/Autocomplete";
// import { SearchIcon } from "@material-ui/Icons"

const Projects = [
  "Project Redux",
  "Project Graphql",
  "Project React",
  "Project Node.js",
];

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
  const [search, setSearch] = useState("");
  // const [sResults, setSResults] =useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5432/api/programs`).then((res) => {
      console.log("programs", res);
      const programs = res.data.filter((program) =>
        program.name.toLowerCase().includes(search.toLowerCase())
      );
      setData(programs);
    });
  }, [search]);

  //handling changes when search bar is active

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={classes.root}>
      <AutoComplete
        id="autocomplete"
        options={data.name}
        renderInput={(params) => (
          <TextField
            {...params}
            className={classes.inputField}
            variant="outlined"
            placeholder="Search.."
            value={search}
            onChange={handleChange}
          />
        )}
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
