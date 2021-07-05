import { makeStyles, Paper, Drawer, Hidden } from '@material-ui/core';
import Contacts from '../../components/Chat/Contacts';
import MessageContent from '../../components/Chat/MessageContent';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../store/actions/chatActions';
import { SEND_MESSAGE } from '../../store/actions/types';
import { isEmpty } from '../../utils/functions';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: 'url("../assets/images/patterns/rain-grey.png")',
        height: '100%',
    },
    drawerPaper: {
		maxWidth: '100%',
		overflow: 'hidden',
		height: '100%',
		[theme.breakpoints.up('md')]: {
			position: 'relative'
		},
	},
}))
const ChatPage = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { contact, newMessage } = useSelector(state => state.chat);
    const dispatch = useDispatch(null);
    
    useEffect(() => {
        dispatch(getContacts());
    }, [])

    useEffect(() => {
        if (!isEmpty(newMessage) && !isEmpty(contact)) {
            if (newMessage.sender._id === contact._id) {
                dispatch({
                    type: SEND_MESSAGE,
                    payload: newMessage
                })
            }
        }
    }, [newMessage])

    useEffect(() => {
        setOpen(false);
    }, [contact])

    return <div className="h-100">
        <Paper elevation={3} className={clsx("d-flex w-100 overflow-hidden position-relative", classes.root)}>
            <Hidden mdUp >
                <Drawer
                    className="position-absolute"
                    variant="temporary"
                    anchor="left"
                    open={open}
                    onClose={() => setOpen(false)}  
                    classes={{
                        paper: clsx(classes.drawerPaper, 'position-absolute')
                    }}
                    ModalProps={{
                        keepMounted: true,
                        disablePortal: true,
                        BackdropProps: {
                            classes: {
                                root: 'position-absolute'
                            }
                        }
                    }}
                >
                    <Contacts />                          
                </Drawer> 
            </Hidden>
            <Hidden smDown>
                <Contacts />  
            </Hidden>       
            <MessageContent onMenuOpen={() => setOpen(true)} />
        </Paper>
    </div>
}
export default ChatPage;