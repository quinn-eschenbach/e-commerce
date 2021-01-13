import React from 'react'
import { Card, CircularProgress, CardContent, CardActions, Typography, Button, Grid, Accordion, AccordionDetails, AccordionSummary } from "@material-ui/core";
import { LocalShipping, Language, Lock, ExpandMore, AddShoppingCart } from "@material-ui/icons"

import Carousel from 'react-material-ui-carousel'

const ProductPage = ({product}) => {
    const styleImg={
        maxHeight: "70vh",
        width: "100%"
    }
    const styleIcons = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }

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
        <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
                <Card>
                    <Carousel autoPlay={false}>
                        {
                            product.assets.map( asset =>(
                                <img src={asset.url} style={styleImg}/>
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
                                kaufbutton
                            </CardContent>
                            <CardActions >
                                <div style={{display: "flex"}}>
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
                                    <Grid item xs={4} style={styleIcons}>
                                        <Lock />
                                        <Typography>Sichere Bezahlung</Typography>
                                    </Grid>
                                    <Grid item xs={4} style={styleIcons}>
                                        <LocalShipping />
                                        <Typography>schneller Versand</Typography>
                                    </Grid>
                                    <Grid item xs={4} style={styleIcons}>
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
                                <Typography>
                                    <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2"/>
                                </Typography>
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
    )

    return (
        <>
            {product ? fullPage(): pageLoading()}
        </>
    )
}

export default ProductPage