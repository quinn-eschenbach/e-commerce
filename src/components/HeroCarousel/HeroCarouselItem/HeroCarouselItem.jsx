import React from 'react'
import { Typography, Button } from "@material-ui/core";
import useStyles from './styles'
import pic1 from './../../../assets/woman2.png'


const HeroCarouselItem = ({backgroundUrl, title, text, itemClassName, textButton, buttonClassName}) => {
    const classes = useStyles()
    return (
        <div className={itemClassName} style={{backgroundImage :'url("'+backgroundUrl+'")', height: 'calc(100vh - 65px)'}}>
            <Typography variant="h1">{title}</Typography>
            <Typography variant="h5">{text}</Typography>
            <Button variant="outlined" className={buttonClassName}> {textButton}</Button>
        </div>
    )
}

export default HeroCarouselItem
