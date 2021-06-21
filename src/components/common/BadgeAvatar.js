import React from 'react';
import { Badge, withStyles, Avatar, makeStyles } from "@material-ui/core";

const StyledBadge = withStyles(theme => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          animation: '$ripple 1.2s infinite ease-in-out',
          border: '1px solid currentColor',
          content: '""',
        },
      },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },    
}))(Badge);

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(9),
        height: theme.spacing(9),
        border: 'solid 1px #787878'
    }
}))

const BadgeAvatar = ({
    src = ""
}) => {
    const classes = useStyles();
    return (
        <StyledBadge
            overlap="circle"
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            variant="dot"
      >
        <Avatar alt="avatar" src={src} className={classes.avatar} />
      </StyledBadge>
    )
}

export default BadgeAvatar;