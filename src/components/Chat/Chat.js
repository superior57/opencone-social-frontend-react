import { makeStyles, Paper, TextField, IconButton } from '@material-ui/core';
import clsx from 'clsx';
import { Send } from "@material-ui/icons";
import { useEffect, useRef, useState } from 'react';
import MessageItem from './Message/MessageItem';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../../store/actions/chatActions';
import moment from 'moment';
import { isEmpty } from '../../utils/functions';

const useStyles = makeStyles(theme => ({
    root: {
        height: 'calc(100% - 64px)',
        transition: '500ms !important',
        '& *': {
            transition: '500ms !important'
        }
    },
    footer: {
        position: 'absolute',
        top: 'auto',
        bottom: 0,  
        width: '100%',
        paddingBottom: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {            
            paddingBottom: theme.spacing(0.9)
        }
    },
    main: {
        height: '100%',
        overflowY: 'auto',
        paddingBottom: theme.spacing(10),
        paddingTop: theme.spacing(2)
    }
}))
const Chat = () => {
    const classes = useStyles();
    const [message, setMessage] = useState("");
    const { user } = useSelector(state => state.auth);
    const { messages } = useSelector(state => state.chat);
    const dispatch = useDispatch(null);
    const { contact } = useSelector(state => state.chat);
    const chatRef = useRef(null);

    useEffect(() => {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }, [messages])

    const handleSubmitMessage = ev => {
        ev.preventDefault();
        if (message) {
            dispatch(sendMessage(contact._id, message));
            setMessage("");
        }
    }
    const getTime = (strDate) => {
        const date = new Date(strDate);
        const dateMessage = moment(date);
        return dateMessage.format("HH:mm A")
    }

    return <div className={clsx("position-relative", classes.root)}>
            <div ref={chatRef} className={clsx("px-3", classes.main)}>
                {
                    messages.map((item, index) => <div key={"message-item-" + index} >     
                        <MessageItem 
                            message={item.message} 
                            time={getTime(item.date)} 
                            isSent={item.sender?._id === user.id}
                            isStart={
                                (index > 0 && index < messages.length - 1) && 
                                (messages[index - 1].sender?._id !== item.sender?._id ) 
                            } 
                        />              
                    </div>)
                }        
            </div>
            <form className={clsx("px-3", classes.footer)} onSubmit={handleSubmitMessage}>
                <Paper className="d-flex align-items-center rounded-pill" elevation={3}>
                    <TextField
                        placeholder="Enter your message"
                        fullWidth
                        InputProps={{
                            disableUnderline: true,
                            style: {
                                paddingLeft: 20
                            }
                        }}
                        value={message}
                        onChange={ev => setMessage(ev.target.value)}
                        disabled={isEmpty(contact)}
                    />
                    <IconButton aria-label="" type="submit" disabled={isEmpty(contact)}>
                        <Send />
                    </IconButton>
                </Paper>
            </form>
        </div>
}
export default Chat;