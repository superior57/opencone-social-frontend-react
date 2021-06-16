import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import CarImg from "../assets/images/products/car-1.png";
import ProductCart from "./common/ProductCart";

const tags = [
    "Cars For Sale",
    "Cars on Installment",
    "CarFax Report",
    "Car Rental",
    "Motorcycle",
    "Car Plates Number"
]

const products =[
    {
        name: "Cars and bikes",
        image: CarImg,
        tags: tags
    },
    {
        name: "Cars and bikes",
        image: CarImg,
        tags: tags
    },
    {
        name: "Cars and bikes",
        image: CarImg,
        tags: tags
    },
    {
        name: "Cars and bikes",
        image: CarImg,
        tags: tags
    },
    {
        name: "Cars and bikes",
        image: CarImg,
        tags: tags
    },
    {
        name: "Cars and bikes",
        image: CarImg,
        tags: tags
    },
    {
        name: "Cars and bikes",
        image: CarImg,
        tags: tags
    },
    {
        name: "Cars and bikes",
        image: CarImg,
        tags: tags
    },
    {
        name: "Cars and bikes",
        image: CarImg,
        tags: tags
    },
    {
        name: "Cars and bikes",
        image: CarImg,
        tags: tags
    },
    {
        name: "Cars and bikes",
        image: CarImg,
        tags: tags
    },
    {
        name: "Cars and bikes",
        image: CarImg,
        tags: tags
    },
]

const ProductContent = () => {
    return (
        <div className="container py-5">
            <Grid container className="w-100 d-flex justify-content-between align-items-center mb-3">
                <Typography>
                    Welcome to OpenSooq Jordan
                </Typography>
                <Link to="">
                    <Button color="primary">
                        Sell, Buy or Advertise Anything for FREE                      
                    </Button>
                </Link>
            </Grid>
            <Grid container spacing={4}>
                {
                    products.map((p, i) => <Grid key={"product-card-" + i} item xs={12} sm={6} md={4} lg={3}>
                        <ProductCart 
                            image={p.image}
                            tags={p.tags}
                            name={p.name}
                        />
                    </Grid>)
                }
            </Grid>
            <Grid container className="d-flex justify-content-center py-5">
                <Button className="border-2" variant="outlined" color="primary">
                    Load More Results        
                </Button>
            </Grid>
        </div>
    )
}

export default ProductContent;