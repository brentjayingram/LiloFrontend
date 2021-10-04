import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
    <AppBar position="fixed">
    <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
        Team Lilo Marine Debris Monitor
        </Typography>
    </Toolbar>
    </AppBar>
    )
}
export default Header;