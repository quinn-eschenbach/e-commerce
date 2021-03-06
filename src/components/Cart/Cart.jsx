import React from 'react'
import { Container, Typography, Button, Grid, IconButton} from '@material-ui/core'
import { ArrowForward } from '@material-ui/icons'
import useStyles from './styles'
import CartItem from './CartItem/CartItem'

const Cart = ({ cart, handleRemoveFromCart, handleUpdateCartQty, handleEmptyCart, onClick}) => {
    const classes = useStyles()

    const EmptyCart = () =>(
        <Typography variant="subtitle1">You have no items in your shopping cart</Typography>        
    )

    const FilledCart = () =>(
        <>
            <Grid className={classes.grid} container spacing={3}>
                {cart.line_items.map((item)=>(
                    <Grid item xs={12} key={item.id}>
                        <CartItem item={item} onRemoveFromCart={handleRemoveFromCart} onUpdateCartQty={handleUpdateCartQty}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">
                    Subtotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div className={classes.buttonWrapper}>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    )

    if(!cart.line_items) return 'Loading'


    return (
        <Container fixed className={classes.drawer}>
            <div>
                <IconButton aria-label="Close Cart" color="inherit" onClick={onClick} className={classes.buttonBack}>
                <ArrowForward/>
            </IconButton> 
            </div>
            
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
