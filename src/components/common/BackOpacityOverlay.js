import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        overflow: 'hidden',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
    },
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
    },
    backgroundImage: {
        objectFit: 'cover',
        width: '100%',
        height: '100%'
    }
}))

const BackOpacityOverlay = ({
    backgroundColor = '#000',
    opacity = 7,
    backgroundImage = null
}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            { backgroundImage && <img className={classes.backgroundImage} src={backgroundImage} alt="Background opacity overlay." /> }
            <div className={classes.overlay} style={{            
                background: backgroundColor,
                opacity: opacity / 10
            }}>
            </div>
        </div>
    )
}

export default BackOpacityOverlay;