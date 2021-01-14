import React from 'react'
import { Products } from "../../components";


const ShopPage = ({products, handleAddToCart}) => {
    return (
        <div>
            <Products products={products} onAddToCart={handleAddToCart}/>
        </div>
    )
}

export default ShopPage
