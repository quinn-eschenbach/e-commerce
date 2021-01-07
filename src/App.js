import React, {useState, useEffect} from 'react'
import { commerce } from "./lib/commerce";
import {Products, Navbar, Cart} from './components'
import { Drawer, IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    openCart: {
      position: 'fixed',
      zIndex: 10000,
      right: 20
    },
    drawer:{
        width: 240
    }
  }));



function App() {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})
    const [open, setOpen] = useState(false);

    const classes = useStyles()

    const fetchProducts = async () => {
        const {data} = await commerce.products.list()
        setProducts(data)
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
    }

    const handleAddToCart = async(productId, quantity) => {
        const {cart} = await commerce.cart.add(productId, quantity)

        setCart(cart)
    }

    const handleUpdateCartQty = async (productId, quantity)=>{
        const {cart} = await commerce.cart.update(productId, {quantity})
        setCart(cart)
    }

    const handleRemoveFromCart = async (productId) =>{
        const { cart } = await commerce.cart.remove(productId)
        setCart(cart)
    }

    const handleEmptyCart = async()=> {
        const { cart } = await commerce.cart.empty()
        setCart(cart)
    }

    const close = ()=>{
        setOpen(!open)
    }

    useEffect(()=>{
        fetchProducts()
        fetchCart()
    }, [])  

    return (
        <div>
            <Navbar />
            <IconButton aria-label="Show cart Items" color="inherit" className={classes.openCart} onClick={close}>
                    <Badge badgeContent={cart.total_items} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
            <Products products={products} onAddToCart={handleAddToCart}/>
            <Drawer variant="persistent" anchor="right" open={open} width="240">                
                <Cart 
                    cart={cart} 
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleUpdateCartQty={handleUpdateCartQty}
                    handleEmptyCart={handleEmptyCart}
                />
            </Drawer>
           
        </div>
    )
}

export default App
