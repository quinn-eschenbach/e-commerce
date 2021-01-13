import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from "@material-ui/core"
import { ShoppingCart } from "@material-ui/icons"
import useStyles from "./styles"

import logo from "../../assets/shop.svg"

const Navbar = ({onClick, cart}) => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <img src={logo} alt="Agueta" height="25px" className={classes.image}/>
                        AGUETA
                    </Typography>
                    <div className={classes.grow}> 
                        <div className={classes.navitem}><Typography>Home</Typography></div>
                        <div className={classes.navitem}><Typography>Shop</Typography></div>
                        <div className={classes.navitem}><Typography>About Us</Typography></div>
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
