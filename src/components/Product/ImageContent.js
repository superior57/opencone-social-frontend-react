import { Grid, makeStyles, Typography, Dialog, DialogContent, IconButton, DialogTitle, useMediaQuery, useTheme } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import clsx from 'clsx';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getFileType } from '../../utils/functions';
import BackOpacityOverlay from '../common/BackOpacityOverlay';
import OverlayContent from '../common/OverlayContent';
import ImageGallery from './ImageGallery';

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
    },
    galleryConent: {
        '&:hover': {
            padding: 0,
            borderStyle: 'solid',
            borderWidth: 2,
            borderColor: theme.palette.primary.main,
            cursor: 'pointer'
        }
    }
}))

const ImageContent = ({
    main = "",
    images = []
}) => {
    const classes = useStyles();
    const { isMobile } = useSelector(store => store.device);
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const isWidthDownSm = useMediaQuery(theme.breakpoints.down('sm'));
    
    
    return (
        <div className="position-relative" style={{
            height: '60vh'
        }}>
            <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="" fullWidth fullScreen={isWidthDownSm} maxWidth={false}>
                <DialogTitle>
                    <IconButton aria-label="" onClick={() => setOpen(false)} className="float-end">
                        <Close />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <ImageGallery images={images} />
                </DialogContent>
            </Dialog>
            <BackOpacityOverlay backgroundImage={main} opacity={9} />
            <OverlayContent className="d-flex align-items-center px-3">
                <Grid container spacing={2} className={classes.gallery} alignItems="center">
                    <Grid item md={7} className={clsx("w-100 align-items-center", classes.mainGrid)}>
                        <Grid container spacing={2} className="h-100">
                            <Grid item className={clsx("w-100 h-100", classes.galleryConent)} onClick={() => setOpen(true)}>                                
                                {
                                    getFileType(main) === "image" ? <img src={main} width="100%" height="100%" alt="" style={{
                                        objectFit: 'cover',
                                        objectPosition: 'top'
                                    }}/> : 
                                    <video src={main} width="100%" height="100%" alt="ad" controls  style={{
                                        objectFit: 'cover',
                                        objectPosition: 'top'
                                    }}/>
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={5} className={clsx("align-items-center", classes.galleryGrid)}>
                        <Grid container spacing={2} className="h-100">
                        {
                            images.map((img, index) => index < 4 && (index === 3 ? 
                            <Grid key={"ad-img-" + index} item xs={3} md={6} className={clsx(classes.galleryItem, classes.galleryConent)} onClick={() => setOpen(true)}>
                                <div className="h-100 position-relative">
                                    {
                                        getFileType(img) === "image" ? <img src={img} width="100%" height="100%" alt="ad" /> : 
                                        <video src={img} width="100%" height="100%" alt="ad" />
                                    }
                                    <BackOpacityOverlay opacity={6} />
                                    <OverlayContent className="d-flex">
                                        <Typography variant={isMobile ? "h6" : "h3"} className="text-white m-auto">
                                            +{images.length - 3}
                                        </Typography>
                                    </OverlayContent>
                                </div>
                            </Grid> : 
                            <Grid key={"ad-img-" + index} item xs={3} md={6} className={clsx(classes.galleryItem, classes.galleryConent)} onClick={() => setOpen(true)}>
                                {
                                    getFileType(img) === "image" ? <img src={img} width="100%" height="100%" alt="ad" /> : 
                                    <video src={img} width="100%" height="100%" alt="ad" />
                                }
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