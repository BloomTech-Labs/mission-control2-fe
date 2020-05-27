import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Del from './Del'
import Edit from './Edit'
const useStyles = makeStyles(() => ({
  ProgramListView: {
    display: 'flex',
    margin: '5%',
  },
  cards: {
    display: 'flex',
    margin: '1%',
    paddingLeft: '15%',
    // border: '1px solid blue'
  },
}))
const Card = (data) => {
  const classes = useStyles()
  const push = (e) => {
    e.preventDefault()
    console.log('got here boss!')
  }
  return (
    <List
      component='nav'
      className={classes.cards}
      aria-label='mailbox folders'
    >
      <ListItem container direction='row' onClick={push}>
        <h2 className={classes.ProgramListData}>Project Name: {data.name}</h2>
      </ListItem>
      <Del props={data.id} />
      <Edit props={data.id} />
    </List>
  )
}

export default Card
