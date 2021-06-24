import { Toolbar, IconButton, Typography, Grid, makeStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { Add } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    button: {
        backgroundColor: green[400],
        boxShadow: theme.shadows[3],
        color: '#FFF',
        '&:hover': {
            backgroundColor: green[700],
            boxShadow: theme.shadows[6],
        }
    }
}))

const CustomCatToolbar = ({
    title = "",
    onClickAddButton= () => {}
}) => {
    const classes = useStyles();
    return <Toolbar>
        <Grid container spacing={1} alignItems="center" justify="space-between">
            <Grid item>
                <Typography variant="h6" color="initial">
                    {title}
                </Typography>
            </Grid>    
            <Grid item>
                <IconButton aria-label="Add" onClick={onClickAddButton} className={classes.button}>    
                    <Add />      
                </IconButton>
            </Grid>      
        </Grid>        
        
    </Toolbar>
}
export default CustomCatToolbar;