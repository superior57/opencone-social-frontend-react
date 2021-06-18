import { Button, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import ColorButton from '../components/common/button/ColorButton';
import ImageContent from '../components/Product/ImageContent';
import { WhatsApp, Sms, Phone, ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import DetailedProfile from '../components/Product/DetailedProfile';
import ShortProfile from '../components/Product/ShortProfile';
import AddressInformation from '../components/Product/AddressInformation';
import AllShopAds from '../components/Product/AllShopAds';
import Popular from '../components/Product/Popular';
import Comments from '../components/Product/Comments';
import { useSelector } from 'react-redux';

const productData = {
    images: [
        "/img/product/ad-1.png",
        "/img/product/ad-2.png",
        "/img/product/ad-3.png",
        "/img/product/ad-4.png",
        "/img/product/ad-5.png",
    ],
    address: [
        {
            title: "City",
            value: "Amman"
        },
        {
            title: "Neighborhood",
            value: "Airport Road - Nakheel Village"
        },
        {
            title: "Number of rooms",
            value: "3 Bedrooms"
        },
        {
            title: "Number of bathrooms",
            value: "4 Bathrooms"
        },
        {
            title: "Surface Area",
            value: "180 m2"
        },
        {
            title: "Floor",
            value: "AmSecond Floorman"
        },
        {
            title: "Age",
            value: "0 - 11 months"
        },
        {
            title: "Furnished/Unfurnished:",
            value: "Unfurnished"
        },
        {
            title: "Payment Method",
            value: "Cash Only"
        },
    ],
    adList: [
        {
            title: "Condominiums",
            img: "/img/mainadimg.png",
            avatar: "/img/mainadimg.png",
            status: "Rent",
            price: 1400
        },
        {
            title: "Condominiums",
            img: "/img/mainadimg.png",
            avatar: "/img/mainadimg.png",
            status: "Rent",
            price: 1400
        },
        {
            title: "Condominiums",
            img: "/img/mainadimg.png",
            avatar: "/img/mainadimg.png",
            status: "Rent",
            price: 1400
        },
        {
            title: "Condominiums",
            img: "/img/mainadimg.png",
            avatar: "/img/mainadimg.png",
            status: "Rent",
            price: 1400
        },
        {
            title: "Condominiums",
            img: "/img/mainadimg.png",
            avatar: "/img/mainadimg.png",
            status: "Rent",
            price: 1400
        },
    ],
    popularList: [
        "3 Bedrooms For Sale in Jubaiha",
        "3 Bedrooms For Sale in Khalda",
        "3 Bedrooms For Sale in Tabarboor",
        "3 Bedrooms For Sale in Daheit Al Rasheed",
        "3 Bedrooms For Sale in Marj El Hamam"
    ],
    commentList: [
        {
            title: "Adam Smit",
            value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione."
        },
        {
            title: "Adam Smit",
            value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione."
        },
        {
            title: "Adam Smit",
            value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione."
        },
    ],
    shortProfile: {
        avatar: "/img/mask.png",
        name: "إسكان المنصور al Mansour housing",
        dateFrom: "07-10-2013",
        reviews: 55,
        phoneNumber: "07969451813",
        generalTips: [
            "Only meet in public places.",
            "Never pay or transfer money in advance.",
            "Inspect the product before you buy it."
        ]
    }

}

const useStyles = makeStyles(theme => ({
    detailedDiv: {
        [theme.breakpoints.down('sm')]: {
            order: '2'
        }
    },
    shortDiv: {
        [theme.breakpoints.down('sm')]: {
            order: '1'
        }
    }
}))

const ProductPage = () => {
    const classes = useStyles();
    const { isMobile } = useSelector(store => store.device);
    return (
        <div>
            <ImageContent 
                main={productData.images[0]}
                images={productData.images}
            />
            <Grid container justify="space-between" alignItems="center" className="py-4">
                <Grid item xs={2}>
                    <Button variant="text" color="primary" className="text-capitalize" fontSize="small" size="small">
                        <ArrowBackIos fontSize="small" />
                        {!isMobile && "Previous Ad"}
                    </Button> 
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <ColorButton color="success" className="">
                                <WhatsApp fontSize="small" /> &nbsp;
                                WhatsApp
                            </ColorButton>
                        </Grid>    
                        <Grid item xs={12} md={4}>
                            <Button variant="contained" color="primary" className="text-capitalize" fullWidth>
                                <Sms fontSize="small" /> &nbsp;
                                Chat
                            </Button>
                        </Grid>       
                        <Grid item xs={12} md={4}>
                            <ColorButton color="danger" className="" outlined>
                                <Phone fontSize="small" /> &nbsp;
                                079694XXXX
                            </ColorButton>
                        </Grid>       
                    </Grid>
                </Grid>
                <Grid item xs={2} className="d-flex justify-content-end">
                    <Button variant="text" color="primary" className="text-capitalize" fontSize="small" size="small">
                        {!isMobile && "Next Ad"}
                        &nbsp;
                        <ArrowForwardIos fontSize="small" />
                    </Button> 
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item md={9} className={classes.detailedDiv}>
                    <Grid container spacing={2} >
                        <Grid item md={7}>
                            <DetailedProfile />
                        </Grid>           
                        <Grid item md={5}>
                            <AddressInformation data={productData.address} /> 
                        </Grid>
                        <Grid item md={11} lg={10} xl={9}>
                            <AllShopAds data={productData.adList} />
                        </Grid>    
                        <Grid item md={11} lg={10} xl={9}>
                            <Popular data={productData.popularList} />
                        </Grid>      
                        <Grid item md={11} lg={10} xl={9}>
                            <Comments data={productData.commentList} />
                        </Grid>   
                    </Grid>
                </Grid>
                <Grid item md={3} className={classes.shortDiv}>
                    <ShortProfile 
                        name={productData.shortProfile.name}
                        avatar={productData.shortProfile.avatar}
                        dateFrom={productData.shortProfile.dateFrom}
                        reviews={productData.shortProfile.reviews}
                        phoneNumber={productData.shortProfile.phoneNumber}
                        generalTips={productData.shortProfile.generalTips}
                    />
                </Grid>
            </Grid>

        </div>
    )
}

export default ProductPage;