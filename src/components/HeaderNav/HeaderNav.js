import React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SimpleModal from '../EditUser/EditUser';
import SettingModal from '../Settings/Settings'

const useStyles = makeStyles(() => ({
    toolbarMenu: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}));

const HeaderNav = () => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (e) => {
        e.preventDefault()
        console.log('hey ho')
        return (
            <EditUser />
        )
    };

    return (
        <AppBar position='static'>
            <Toolbar className={classes.toolbarMenu}>
                <Typography>Mission Control: Dashboard</Typography>
                <div>
                    <Button aria-controls="simple-menu" aria-haspopup="true" color="inherit" onClick={handleClick}>
                        Menu
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        anchorOrigin={{
                            vertical: 'top'
                        }}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}><SettingModal></SettingModal></MenuItem>
                        <MenuItem onClick={handleClose}><SimpleModal></SimpleModal></MenuItem>

                    </Menu>
                    <Button variant="contained" color="primary">
                        Logout
                        </Button>
                </div>
            </Toolbar>
        </AppBar>
    )
};

export default HeaderNav;