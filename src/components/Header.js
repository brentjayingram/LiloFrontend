import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const Header = () => {
    return (
    <AppBar position="fixed">
    <Toolbar variant="dense">
 
        <Typography variant="h6" color="inherit" component="div">
        Team Lilo Marine Debris Monitor
        </Typography>
    </Toolbar>
    </AppBar>
    )
}
export default Header;