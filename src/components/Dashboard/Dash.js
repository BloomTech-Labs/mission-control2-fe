import React from "react";
import HeaderNav from "../HeaderNav/HeaderNav";
import ProgramList from "../ProgramList/ProgramList";
import { Grid } from "@material-ui/core";
import SearchBar from "../Search/searchbar";

function Dash() {
  return (
    <Grid container direction="column">
      <Grid item>
        <HeaderNav />
        <SearchBar />
      </Grid>
      <Grid item container>
        <ProgramList />
      </Grid>
    </Grid>
  );
}

export default Dash;
