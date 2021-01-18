import React from 'react'
import Carousel from 'react-material-ui-carousel'
import HeroCarouselItem from './HeroCarouselItem/HeroCarouselItem'
import header1 from "./../../assets/header1.jpg"
import header2 from "./../../assets/header2.jpg"
import header3 from "./../../assets/header3.jpg"
import useStyles from "./styles"

const HeroCarousel = () => {
    const classes = useStyles()
    return (
        <Carousel animation="fade" interval="5000" navButtonsAlwaysVisible={true}>
            <HeroCarouselItem 
                backgroundUrl={header3} 
                itemClassName={classes.item1Header} 
                text="erleben sie italienische schönheit" 
                title="AGUETA" 
                textButton="zum store"
                buttonClassName={classes.button1}
            />
            <HeroCarouselItem 
                backgroundUrl={header2} 
                itemClassName={classes.item2Header} 
                text="haut knackiger als rostbratwurst" 
                title="EQUILLBRIO" 
                textButton="jetzt entdecken"
                buttonClassName={classes.button2}
            />     
            <HeroCarouselItem 
                backgroundUrl={header1} 
                itemClassName={classes.item3Header} 
                text="schöne haare fratello" 
                title="AGLIA" 
                textButton="jetzt entdecken"
                buttonClassName={classes.button3}
            />         
        </Carousel>
    )
}

export default HeroCarousel
