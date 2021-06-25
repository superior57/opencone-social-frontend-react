import { Toolbar, IconButton, Typography, Grid, makeStyles } from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";
import { Add, Save } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    addButton: {
        backgroundColor: red[400],
        boxShadow: theme.shadows[3],
        color: '#FFF',
        '&:hover': {
            backgroundColor: red[700],
            boxShadow: theme.shadows[6],
        }
    },
    saveButton: {
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
    onClickAddButton= () => {},
    adding = false,
    onAddValue = () => {}
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
                {
                    adding ? <IconButton aria-label="Save" onClick={onAddValue} className={classes.saveButton}>    
                        <Save />      
                    </IconButton> : <IconButton aria-label="Add" onClick={onClickAddButton} className={classes.addButton}>    
                        <Add />      
                    </IconButton>
                }
            </Grid>      
        </Grid>        
        
    </Toolbar>
}
export default CustomCatToolbar;