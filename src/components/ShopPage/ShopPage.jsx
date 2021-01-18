import React, {useState, useEffect} from 'react'
import { Products } from "../../components";
import {Typography, Card, CardContent, Divider, FormControlLabel, Checkbox, TextField, Button} from '@material-ui/core'

import useStyles from './styles'


const ShopPage = ({products, handleAddToCart}) => {
    const classes = useStyles()

    const [categories, setCategories] = React.useState([])
    const [productsState, setProductsState] = React.useState([])

    const getCategories = () =>{
        let values = []
        products.map(product => {
            product.categories.map(category =>{
                if(!values.includes(category.name)){
                    values.push(category.name)
                }
            })            
        })
        return values
    }

    useEffect(()=>{
        setCategories(getCategories())
        setProductsState(products)
    }, []) 

   

    return (
            <>           
                <div className={classes.mainWrapper}>
                    <div className={classes.filterWrapper}>
                        <Card>
                            <CardContent className={classes.filters}>
                                <TextField label="Suche" variant="outlined" />
                                <Typography variant="overline">Produktlinen</Typography>
                                <Divider />
                                <FormControlLabel 
                                    control={
                                        <Checkbox 

                                        />
                                    }
                                    label="Aglaia"
                                />
                                <FormControlLabel 
                                    control={
                                        <Checkbox 

                                        />
                                    }
                                    label="Equillibrio"
                                />
                                <Typography variant="overline">Kategorien</Typography>
                                <Divider />
                                <FormControlLabel 
                                    control={
                                        <Checkbox 

                                        />
                                    }
                                    label="Face"
                                />
                                <FormControlLabel 
                                    control={
                                        <Checkbox 

                                        />
                                    }
                                    label="Body"
                                />
                                 <FormControlLabel 
                                    control={
                                        <Checkbox 

                                        />
                                    }
                                    label="Feet"
                                />
                                 <FormControlLabel 
                                    control={
                                        <Checkbox 

                                        />
                                    }
                                    label="Hand"
                                />
                                 <FormControlLabel 
                                    control={
                                        <Checkbox 

                                        />
                                    }
                                    label="Creme"
                                />
                                 <FormControlLabel 
                                    control={
                                        <Checkbox 

                                        />
                                    }
                                    label="Peeling"
                                />
                            </CardContent>                            
                        </Card>
                        
                    </div>
                    <Card className={classes.productWrapper}>
                        <CardContent>
                        <Typography variant="h2">Alle Produkte</Typography>
                        <Divider />
                        <div className={classes.buttonWrapper}>
                            <Button variant="outlined">Aglaia erleben</Button>
                            <Button variant="outlined">Equillibrio erleben</Button>
                        </div>
                        <Products products={productsState} onAddToCart={handleAddToCart}/>
                        </CardContent>
                        
                    </Card>                    
                </div>
                
            </>
    )
}

export default ShopPage
