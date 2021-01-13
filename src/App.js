import React, {useState, useEffect} from 'react'
import { commerce } from "./lib/commerce";
import {Products, Navbar, Cart, ProductPage} from './components'
import { Drawer, IconButton, Badge } from "@material-ui/core";


const style = {
    height: 65
}


function App() {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})
    const [open, setOpen] = useState(false);

   

    const fetchProducts = async () => {
        const {data} = await commerce.products.list()
        setProducts(data)
        console.log(data)
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
            <Navbar onClick={close} cart={cart} />
            <div style={style}/>
            <Drawer variant="persistent" anchor="right" open={open}>                
                <Cart 
                    cart={cart} 
                    onClick={close}
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleUpdateCartQty={handleUpdateCartQty}
                    handleEmptyCart={handleEmptyCart}
                />
            </Drawer>
            <main>
                <ProductPage product={products[0]}/>
            </main>
            <Products products={products} onAddToCart={handleAddToCart}/>
            
           
        </div>
    )
}

export default App
