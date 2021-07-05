import { Paper, makeStyles, Toolbar, Typography, IconButton, Hidden } from "@material-ui/core";
import { Chat as ChatIcon } from "@material-ui/icons";
import clsx from "clsx";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../../utils/functions";
import BadgeAvatar from "../common/BadgeAvatar";
import Chat from "./Chat";
import ProgressCircle from "../common/progress/ProgressCircle";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#ffffff50'
    },
    header: {
        backgroundColor: theme.palette.primary.dark,
        boxShadow: theme.shadows[3],
        color: '#FFF'
    }
}))
const MessageContent = ({
    onMenuOpen = () => {}
}) => {
    const classes = useStyles();
    const { contact } = useSelector(state => state.chat); 
    const chat = useSelector(state => state.chat);

    return <Paper square elevation={0} className={clsx("w-100 h-100 d-flex flex-column", classes.root)} >
            <div className={classes.header}>
                <Toolbar>
                    <Hidden mdUp>
                        <IconButton aria-label="" onClick={onMenuOpen}>
                            <ChatIcon style={{ color: '#FFF' }}  />
                        </IconButton>
                    </Hidden>
                    {
                        !isEmpty(contact) && <Fragment>
                            
                            <BadgeAvatar src={contact?.avatar} size="small" showBadge={false} />
                            <Typography variant="h6" className="px-2">
                                { contact?.name }                  
                            </Typography>
                        </Fragment>
                    }
                </Toolbar>
            </div>
            {
                !chat.loading ? <Chat /> : <ProgressCircle />
            }
        </Paper>
}
export default MessageContent;