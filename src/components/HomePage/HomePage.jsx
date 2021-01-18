import React from 'react'
import Carousel from 'react-material-ui-carousel'
import HeroCarousel from './../HeroCarousel/HeroCarousel'
import Products from './../Products/Products'
import { Typography, Divider } from '@material-ui/core'

import useStyles from "./styles"

const HomePage = ({products}) => {

    const classes = useStyles();

    return (
        <div>
            <HeroCarousel />
            
            <div className={classes.mainSection}>
                <Typography variant="h4" className={classes.topProducts}>Agueta empfiehlt:</Typography> 
                <Divider className={classes.divider} />               
                <Products products={products}/>
                <Divider className={classes.divider} />
            </div>
            
        </div>
    )
}

export default HomePage
