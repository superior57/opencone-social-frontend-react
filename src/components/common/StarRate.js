import React from 'react';
import { yellow } from '@material-ui/core/colors';
import { Star } from "@material-ui/icons";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        '& *': {
            color: yellow[600]
        }
    }
}))

const StarRate = ({
    rates = [10, 10, 10, 10, 10]
}) => {
    const classes = useStyles();
    for(let i = 0; i < 5; i ++) {
        rates[i] = rates[i] ? rates[i] : 0;
    }
    return (
        <Typography className={classes.root}>
            {
                rates.map((rate, index) => <Star key={'rate-' + index} />)                            
            }
        </Typography>
    )
}

export default StarRate;