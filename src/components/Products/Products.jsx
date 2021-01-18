import React from "react"
import { Grid, Grow } from '@material-ui/core'

import Product from './Product/Product'

import useStyles from './styles'


/*const products = [
    { id:1, name : 'Shoes', description: 'Running shoes' , price:'$80', image:'https://picsum.photos/800'},
    { id:2, name : 'MacBoook', description: 'Fancy Apple stuff' , price:'$150', image:'https://picsum.photos/700'},
    { id:3, name : 'Mushroom', description: 'Yummy', price:'$10', image:'https://picsum.photos/600'},
    { id:4, name : 'Skateboard', description: 'u sk8?' , price:'$16', image:'https://picsum.photos/500'}
]*/

const Products = ({products, onAddToCart})=>{

    const classes = useStyles()

    return(
       <>
        <Grid container justify="center" spacing={4}>
            {
                products.map((product)=>(
                    <Grow in="true">
                        <Grid item key={product.id} xs={12} sm={6} lg={3}>
                            <Product product={product} onAddToCart={onAddToCart}/>
                        </Grid>
                    </Grow>
                    
                ))
            }
        </Grid>
    </>
    )    
}

export default Products