import { makeStyles, Typography } from "@material-ui/core"
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        paddingRight: 100,
        [theme.breakpoints.down('sm')]: {
            paddingRight: 30
        },
        '& .message-item': {
            backgroundColor: '#FFF',
            color: '#787878',
            padding: '5px 15px',
            marginBottom: 2,
            borderRadius: '10px',
            boxShadow: theme.shadows[2],
        },
    },
    messageTime: {
        marginLeft: 10
    },
    sent: {     
        paddingRight: 0,
        paddingLeft: 100,
        justifyContent: 'flex-end',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 30
        },
        '& .message-item': {
            backgroundColor: theme.palette.primary.dark,
            color: '#FFF',
        }
    }
}))

const MessageItem = ({
    message = "",
    time = "",
    isStart = false,
    isSent = true
}) => {    
    const classes = useStyles();
    return <div 
            className={clsx(isStart && "mt-3", classes.root, {
                [classes.sent]: isSent
            })}
        >
            <div className="message-item">
                {message}
                <Typography variant="caption" color="initial" className={classes.messageTime} >
                    {time}
                </Typography>
            </div>
        </div>
}

export default MessageItem;
