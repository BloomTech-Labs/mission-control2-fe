import React from 'react'
import EditUser from '../EditUser/EditUser'
import { useHistory } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import SimpleModal from '../EditUser/EditUser'
//makes the header nav bar
const useStyles = makeStyles(() => ({
  toolbarMenu: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))
const Nav = (props) => {
  const history = useHistory()
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (e) => {
    e.preventDefault()
    setAnchorEl(false)
    return <EditUser />
  }

  //clears out the users info so they are no longer logged in
  const logout = (e) => {
    e.preventDefault()
    console.log(props.user.name)
    localStorage.clear()
    history.push('/')
  }

  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbarMenu}>
        <Typography>Mission Control: {props.user.name}'s Dashboard </Typography>
        <div>
          <Button
            aria-controls='simple-menu'
            aria-haspopup='true'
            color='inherit'
            onClick={handleClick}
          >
            Menu
          </Button>
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            anchorOrigin={{
              vertical: 'top',
            }}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <SimpleModal user={props.user} setUser={props.setUser} />
            </MenuItem>
          </Menu>
          <Button onClick={logout} variant='contained' color='primary'>
            Logout
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}
export default Nav
