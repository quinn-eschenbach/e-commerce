import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from "@material-ui/core"
import { ShoppingCart } from "@material-ui/icons"
import { Link } from "react-router-dom";
import useStyles from "./styles"

import logo from "../../assets/shop.svg"

const Navbar = ({onClick, cart}) => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        AGUETA
                    </Typography>
                    <div className={classes.grow}> 
                        <Link to="/" className={classes.navitem}><Typography>Home</Typography></Link >
                        <Link to="/shop" className={classes.navitem}><Typography>Shop</Typography></Link >
                        <Link to="/about" className={classes.navitem}><Typography>About Us</Typography></Link >
                    </div>
                    <div className={classes.button} >
                    <IconButton aria-label="Show cart Items" color="inherit" className={classes.openCart} onClick={onClick}>
                    <Badge badgeContent={cart.total_items} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
