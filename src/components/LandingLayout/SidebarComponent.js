import React from "react";
import { Drawer, List, ListItem, ListItemText, makeStyles, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { Add } from "@material-ui/icons";

const drawerWidth = 300;
const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth
    },
    drawerOpen: {
        width: drawerWidth,
    },
    drawerClose: {
        overflowX: "hidden",
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(8),
        },
    }
}))
const SidebarComponent = ({
    open = false,
    onClose = () => {},
    list = []
}) => {
    const classes = useStyles();
    return (
        <Drawer 
            anchor="right"
            open={open}
            onClose={onClose}
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open
                }),
            }}     
        >
            <div 
                role="presentation"
                onClick={onClose}
                onKeyDown={onClose}
            >
                <List>
                    {
                        list.map((li, index) => <Link key={"menu-item-" + index} className="text-decoration-none text-dark" to={li.link}>
                            <ListItem button >                            
                                <ListItemText primary={li.label} />                            
                            </ListItem>
                        </Link>)
                    }
                </List>
                <Grid item className="px-3">
                    <Button variant="outlined" color="primary" className="text-uppercase border-2" >
                        <Add color="primary" fontSize="small" /> Post Ad For Free                      
                    </Button>
                </Grid>
            </div>
        </Drawer>
    )
}

export default SidebarComponent;