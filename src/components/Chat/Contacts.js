import { List, ListItem, ListItemText, ListItemAvatar, Paper, Divider, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from '../../store/actions/chatActions';
import BadgeAvatar from '../common/BadgeAvatar';

const useStyles = makeStyles(theme => ({
    collapsed: {
        width: 350,
        maxWidth: 350,
        minWidth: 350
    },
    full: {
        width: '100%'
    }
}))

const Contacts = () => {
    const classes = useStyles();
    const { contacts } = useSelector(state => state.chat); 
    const dispatch = useDispatch(null);

    return <Paper square elevation={0} className={clsx("h-100 overflow-auto", {
        [classes.collapsed]: true,
    })}>
            <List>
                {
                    contacts.map((contact, index) => <Fragment key={"contact-item-" + index}>
                        <ListItem button className="py-4" onClick={() => dispatch(getMessages(contact.receiver._id))}>
                            <ListItemAvatar style={{ marginRight: 20 }}>
                                <BadgeAvatar src={contact.receiver?.avatar} size="small"/>
                            </ListItemAvatar>
                            <ListItemText>{contact.receiver?.name}</ListItemText>
                        </ListItem>
                        <Divider />
                    </Fragment>)
                }   
            </List>
        </Paper>
}
export default Contacts;