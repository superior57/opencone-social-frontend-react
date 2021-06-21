import React, { useEffect, useState } from 'react';
import { Paper, Grid, Typography, Button, Divider, IconButton, makeStyles, Collapse } from "@material-ui/core";
import BadgeAvatar from '../common/BadgeAvatar';
import { CheckCircle, LocalOffer, Phone, WhatsApp, FiberManualRecord, ExpandMore, ExpandLess, Sms } from "@material-ui/icons";
import ColorButton from '../common/button/ColorButton';
import StarRate from '../common/StarRate';
import clsx from "clsx";
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
    collapseButton: {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
        marginBottom: -35,
        marginTop: -20
    }
}))

const ShortProfile = ({
    avatar = "",
    name = "",
    followed = false,
    dateFrom = "",
    reviews = 0,
    phoneNumber = "",
    generalTips = []

}) => {    
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const device = useSelector(store => store.device);

    useEffect(() => {
        setExpanded(!device.isMobile);
    }, [device]);
    
    return (
        <Paper variant="outlined" square className="w-100">
            <Grid container spacing={1} className="p-4 text-center" justify="center">
                <Grid item xs={12}>
                    <IconButton aria-label="collapse" className={clsx("float-end", classes.collapseButton)} onClick={() => setExpanded(!expanded)}>
                      {
                          expanded ? <ExpandLess /> : <ExpandMore />
                      }
                    </IconButton>
                </Grid>
                <Grid item md={12}>
                    <BadgeAvatar src={avatar} />
                </Grid>
                <Grid item md={12} className="my-auto">
                    <Typography variant="subtitle1" color="primary">
                        <CheckCircle /> &nbsp;
                        {name}
                    </Typography>
                </Grid>
                <Collapse in={expanded} unmountOnExit>
                    <Grid item xs={12}>
                        <Button variant="text" color="primary" size="small">
                            Follow                      
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1" className="text-black-50">
                            Member since {dateFrom}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className="mb-3 d-flex flex-wrap justify-content-center">                    
                        <StarRate />
                        <Typography variant="subtitle1" className="text-black-50">
                            ({reviews} reviews)
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className="px-md-4">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="subtitle1" color="primary">
                                    <LocalOffer /> &nbsp;
                                    ASK FOR PRICE
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" className="text-capitalize" size="large" fullWidth>
                                    <Sms fontSize="small" /> &nbsp;
                                    Chat
                                </Button>                                                      
                            </Grid>
                            <Grid item xs={12}>
                                <ColorButton color="danger" className="" outlined size="large">
                                    <Phone fontSize="small" /> &nbsp;
                                    {phoneNumber}
                                </ColorButton>                                                     
                            </Grid>
                            <Grid item xs={12}>
                                <ColorButton color="success" className="" size="large">
                                    <WhatsApp fontSize="small" /> &nbsp;
                                    WhatsApp
                                </ColorButton>                                                  
                            </Grid>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
           <Collapse in={expanded}>
                <Divider className="bg-dark" />
                <Grid container spacing={1} className="p-3">
                    <Grid item xs={12}>
                        <Typography variant="subtitle1">
                            General Tips:
                        </Typography>
                    </Grid>
                    {
                        generalTips.map((tip, index) => <Grid key={'tip-' + index} item xs={12}>
                            <Typography variant="subtitle1" className="text-black-50">
                                <FiberManualRecord style={{
                                    width: '10px'
                                }} /> &nbsp;
                                {tip}                        
                            </Typography>
                        </Grid>)
                    }
                </Grid>
           </Collapse>
        </Paper>
    )
}

export default ShortProfile;