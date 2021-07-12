import { makeStyles, Typography, IconButton, Popper, Paper, ClickAwayListener, MenuList, MenuItem, Grow } from "@material-ui/core"
import clsx from "clsx";
import { MoreVert } from "@material-ui/icons";
import React, { } from "react";
import { deleteMessage } from "../../../store/actions/chatActions";
import { useDispatch } from "react-redux";

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
        '& .more': {
            display: 'none'
        },
        '&:hover .more': {
            display: 'block'
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
    id = "",
    message = "",
    time = "",
    isStart = false,
    isSent = true
}) => {    
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const dispatch = useDispatch(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const closeMenu = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
        event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const handleMsgDelete = ev => {
        dispatch(deleteMessage(id));
        closeMenu(ev);
    }

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
            {
                isSent && <div className="position-relative px-2" style={{
                        width: 40
                    }}>
                        <IconButton 
                            ref={anchorRef}
                            aria-controls={open ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            onClick={handleToggle}
                            size="small"
                            className="more"
                        >
                            <MoreVert />
                        </IconButton>
        
                        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal style={{
                            zIndex: 999
                        }}>
                        {({ TransitionProps, placement }) => (
                            <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                            <Paper>
                                <ClickAwayListener onClickAway={closeMenu}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <MenuItem onClick={handleMsgDelete}>Delete</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                            </Grow>
                        )}
                        </Popper>
                    </div>
            }
        </div>
}

export default MessageItem;
