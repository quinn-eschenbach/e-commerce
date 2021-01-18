import React from 'react'
import { Card, CircularProgress, CardContent, CardActions, Typography, Button, Grid, Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import { LocalShipping, Language, Lock, ExpandMore, AddShoppingCart } from "@material-ui/icons"
import { useParams } from "react-router-dom"
import useStyles from "./styles"

import Carousel from 'react-material-ui-carousel'

const ProductPage = ({products}) => {

    const classes = useStyles();

    let {id} = useParams()

    const productsFilterd = products.filter(product => (
        product.id == id
    ))

    const product = productsFilterd[0]

    const pageLoading = ()=> (
        <div style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <CircularProgress/>
        </div>
    )

    const fullPage = () => (
        <div className={classes.mainWrapper}> 
            <Grid container spacing={3}>
                <Grid item xs={12} sm={8}>
                    <Card>
                        <Carousel autoPlay={false}>
                            {
                                product.assets.map( asset =>(
                                    <div key={asset.id} src={asset.url} style={{ height: '70vh',backgroundImage: `url("${asset.url}")`, backgroundRepeat: 'no-repeat', backgroundPosition:'center', backgroundSize: 'contain'}}/>
                                ))
                            }
                        </Carousel>
                    </Card>                
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Card >
                                <CardContent>
                                    <Typography variant="h4">{product.name}</Typography>
                                    <Typography variant="body2" gutterBottom>200ml</Typography>
                                    <Typography variant="h6">{product.price.formatted_with_symbol}</Typography>
                                    <Typography variant="h6" gutterBottom>inkl. MwSt. zzgl. Versandkosten</Typography>
                                    <Typography variant="body1">Sofort versandfertig, Lieferzeit ca. 2-4 Werktage</Typography>
                                </CardContent>
                                <CardActions >
                                    <div className={classes.buttonWrapper}>
                                        <Button type="button" size="small">-</Button>
                                        <Typography>1</Typography>
                                        <Button type="button" size="small">+</Button>
                                        <Button variant="contained" type="button" color="primary" startIcon={<AddShoppingCart/>}>in den Warenkorb</Button>
                                    </div>
                                    
                                </CardActions>  
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <Card>
                                <CardContent>
                                    <Grid 
                                        container 
                                        spacing={1}
                                        justify="center"
                                        alignItems="center"
                                    >
                                        <Grid item xs={4} style={classes.icon} className={classes.badgeWrapper}>
                                            <Lock />
                                            <Typography>Sichere Bezahlung</Typography>
                                        </Grid>
                                        <Grid item xs={4} style={classes.icon} className={classes.badgeWrapper}>
                                            <LocalShipping />
                                            <Typography>schneller Versand</Typography>
                                        </Grid>
                                        <Grid item xs={4} style={classes.icon} className={classes.badgeWrapper}>
                                            <Language/>
                                            <Typography>weltweite Lieferung</Typography>
                                        </Grid>
                                    </Grid>                                
                                </CardContent>                            
                            </Card>
                        </Grid>

                        <Grid item xs={12}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMore />}
                                >
                                    <Typography>Beschreibung</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2"/>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMore />}
                                >
                                    <Typography>Anwendung</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                        sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMore />}
                                >
                                    <Typography>Inhaltsstoffe</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                        sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    </Grid>
                </Grid>
            
                
            </Grid>
        </div>
        
    )

    return (
        <>
            {product && product.id ? fullPage(): pageLoading()}
            {console.log(product)}
        </>
    )
}

export default ProductPage