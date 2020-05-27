import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from './Nav'
import { Grid } from '@material-ui/core'
import List from './List'
function Dash(props) {
  //does a axios call to get the user, then calls and changes the header to match it
  const [user, setUser] = useState({})
  useEffect(() => {
    axios
      .get(`http://localhost:3232/api/persons/${localStorage.getItem('id')}`)
      .then((res) => {
        console.log('***')
        setUser(res.data)
      })
      .catch((err) => console.error(err))
  }, [])
  return (
    <Grid container direction='column'>
      <Grid item>
        <Nav user={user} setUser={setUser} />
      </Grid>
      <Grid item container>
        <List />
      </Grid>
    </Grid>
  )
}
export default Dash
