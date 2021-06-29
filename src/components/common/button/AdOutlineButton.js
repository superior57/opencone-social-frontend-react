import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            '& *': {
                color: 'white',
            }
        }
    }
}))
const AdOutlineButton = ({ children, ...otherProps }) => {
    const classes = useStyles();
    return <Button className={classes.root} variant="outlined" {...otherProps}>
      {children}
    </Button>
}
export default AdOutlineButton;