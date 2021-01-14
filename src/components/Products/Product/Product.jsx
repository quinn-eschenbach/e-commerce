import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";


import useStyles  from "./styles";

const Product = ({product, onAddToCart}) => {

    const classes = useStyles()

    return (
        <Link className={classes.link} to={`/product/${product.id}`}>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h5">
                            {product.price.formatted_with_symbol}
                        </Typography>
                    </div>
                    {/*<Typography className={classes.description} dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary" />*/}
                    <div className={classes.categories}>
                        {product.categories.map(category=>(
                        <Typography>{category.name},</Typography>
                    ))}
                    </div>
                    
                </CardContent>
                <CardActions>
                    <IconButton aria-label="Add to Card" onClick={()=> onAddToCart(product.id, 1)}>
                        <AddShoppingCart/>
                    </IconButton>
                </CardActions>
            </Card>
        </Link>
    )
}

export default Product
