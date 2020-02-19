import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from "react-router-dom";
import './NavBar.scss'

const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" noWrap className="nav-item">
                    <Link to="/">Home</Link>
                </Typography>
                <Typography variant="h6" noWrap className="nav-item">
                    <Link to="/contact-us">Contact Us</Link>
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default NavBar;