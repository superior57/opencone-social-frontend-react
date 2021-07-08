import React, { useEffect, useState } from 'react';
import { Paper, Grid, Typography, Button, Divider, IconButton, makeStyles, Collapse } from "@material-ui/core";
import BadgeAvatar from '../common/BadgeAvatar';
import { CheckCircle, LocalOffer, Phone, WhatsApp, FiberManualRecord, ExpandMore, ExpandLess, Sms } from "@material-ui/icons";
import ColorButton from '../common/button/ColorButton';
import StarRate from '../common/StarRate';
import clsx from "clsx";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addContact } from '../../store/actions/chatActions';

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
    id = "",
    avatar = "",
    name = "",
    followed = false,
    dateFrom = "",
    reviews = 0,
    phoneNumber = "",
    generalTips = [],
    gender = ""

}) => {    
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const device = useSelector(store => store.device);
    const history = useHistory();
    const dispatch = useDispatch(null);
    const { contacts } = useSelector(state => state.chat);
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        setExpanded(!device.isMobile);
    }, [device]);

    const handleClickChatButton = ev => {
        if (!contacts.find(contact => contact.receiver._id === id) && id !== auth.user.id) {
            dispatch(addContact(id, history));
        } else {
            history.push('/chat');
        }
    }
    
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
                    <BadgeAvatar src={avatar} gender={gender} />
                </Grid>
                <Grid item md={12} className="my-auto">
                    <Typography variant="subtitle1" color="primary">
                        <CheckCircle />&nbsp;
                        <Button variant="text" color="primary" style={{ textTransform: 'none', fontSize: 18, padding: 0 }} onClick={() => history.push('/u/' + id)}>
                            {name}                          
                        </Button>
                    </Typography>
                </Grid>
                <Collapse in={expanded} unmountOnExit>
                    <Grid item xs={12}>
                        <Button variant="text" color="primary" size="small" disabled={id === auth.user.id}>
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
                                <Button variant="contained" color="primary" className="text-capitalize" size="large" fullWidth onClick={handleClickChatButton} disabled={id === auth.user.id}>
                                    <Sms fontSize="small" /> &nbsp;
                                    Chat
                                </Button>                                                      
                            </Grid>
                            <Grid item xs={12}>
                                <ColorButton color="danger" className="" outlined size="large" disabled={id === auth.user.id}>
                                    <Phone fontSize="small" /> &nbsp;
                                    {phoneNumber}
                                </ColorButton>                                                     
                            </Grid>
                            <Grid item xs={12}>
                                <ColorButton color="success" className="" size="large" disabled={id === auth.user.id}>
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