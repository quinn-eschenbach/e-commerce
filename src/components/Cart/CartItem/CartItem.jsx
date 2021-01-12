import React from 'react'
import{ Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'

import useStyles from './styles'

const CartItem = ({item, onRemoveFromCart, onUpdateCartQty}) => {
    const classes = useStyles()

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">
                    {item.name}
                </Typography>
                <Typography variant="h4">
                    {item.line_total.formatted_with_symbol}
                </Typography>                
            </CardContent>
            <CardActions className={classes.cartActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={()=> onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={()=> onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                    <Button variant="contained" type="button" color="secondary" onClick={()=> onRemoveFromCart(item.id)}>Remove</Button>
                </div>
                
            </CardActions>            
        </Card>
    )
}

export default CartItem
