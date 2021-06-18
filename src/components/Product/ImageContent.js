import { Grid, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import BackOpacityOverlay from '../common/BackOpacityOverlay';
import OverlayContent from '../common/OverlayContent';

const useStyles = makeStyles(theme => ({
    gallery: {
        height: '100%',
    },
    mainGrid: {
        height: '75%',
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            height: '100%'
        }
    },
    galleryGrid: {
        height: '25%',
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            height: '100%'
        }
    },
    galleryItem: {
        height: '100%',
        '& *': {
            cursor: 'pointer'
        },     
        '& img': {
            width: '100%',
            height: '100%'
        },
        [theme.breakpoints.up('md')]: {
            height: '50%'
        }
    }
}))

const ImageContent = ({
    main = "",
    images = []
}) => {
    const classes = useStyles();
    const { isMobile } = useSelector(store => store.device);
    return (
        <div className="position-relative" style={{
            height: '60vh'
        }}>
            <BackOpacityOverlay backgroundImage={main} opacity={9} />
            <OverlayContent className="d-flex align-items-center px-3">
                <Grid container spacing={2} className={classes.gallery} alignItems="center">
                    <Grid item md={7} className={clsx("align-items-center", classes.mainGrid)}>
                        <Grid container spacing={2} className="h-100">
                            <Grid item className="h-100">
                                <img src={main} width="100%" height="100%" alt="" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={5} className={clsx("align-items-center", classes.galleryGrid)}>
                        <Grid container spacing={2} className="h-100">
                        {
                            images.map((img, index) => index < 4 && (index === 3 ? 
                            <Grid key={"ad-img-" + index} item xs={3} md={6} className={classes.galleryItem}>
                                <div className="h-100 position-relative">
                                    <img src={img} width="100%" height="100%" alt="ad" />
                                    <BackOpacityOverlay opacity={6} />
                                    <OverlayContent className="d-flex">
                                        <Typography variant={isMobile ? "h6" : "h3"} className="text-white m-auto">
                                            +12
                                        </Typography>
                                    </OverlayContent>
                                </div>
                            </Grid> : 
                            <Grid key={"ad-img-" + index} item xs={3} md={6} className={classes.galleryItem}>
                                    <img src={img} alt="ad" />
                            </Grid>)
                            )
                        }                             
                        </Grid>                    
                    </Grid>                     
                </Grid>
            </OverlayContent>
        </div>
    )
}

export default ImageContent;