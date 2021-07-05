import React from 'react';
import { Badge, withStyles, Avatar, makeStyles } from "@material-ui/core";
import MaleImg from "../../assets/images/avatar/male.png";
import FemaleImg from "../../assets/images/avatar/female.png";
import clsx from 'clsx';

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
        border: 'solid 1px #787878',
        backgroundColor: 'white'
    },
    medium: {
        width: theme.spacing(9),
        height: theme.spacing(9),
    },
    small: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    }
}))

const BadgeAvatar = ({
    src = "",
    gender = "male",
    size = "medium",
    showBadge = true,
    ...otherProps
}) => {
    const classes = useStyles();
    const defaultImg = gender === "female" ? FemaleImg : MaleImg;

    return (
        <div {...otherProps}>
            <StyledBadge
                overlap="circle"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                variant={showBadge ? "dot" : "standard"}
            >
                <Avatar alt="avatar" src={src || defaultImg} className={clsx(classes.avatar, classes[size])} />
            </StyledBadge>
        </div>
    )
}

export default BadgeAvatar;