import React, { useState } from "react";
import { AppBar, Grid, makeStyles, Button } from "@material-ui/core";
import LogoComponent from "../common/logo";
import { ListItem } from "../common/menu";
import { Add, Dehaze } from "@material-ui/icons";
import SidebarComponent from "./SidebarComponent";

const useStyles = makeStyles(theme => ({
    root: {
        height: '70px'
    }
}));

const headerRoutes = [
    {
        label: "Home",
        link: "/home"
    },
    {
        label: "Projects",
        link: "/projects"
    },
    {
        label: "Shops",
        link: "/shop"
    },
    {
        label: "Login",
        link: "/"
    },
]

const HeaderComponent = () => {
    const classes = useStyles();
    const { pathname }= window.location;
    const [sidebarOpen, setSidebarOpen] = useState(false);


    const handleSidebarClose = (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setSidebarOpen(false);
    }

    return (
        <AppBar
            className={`${classes.root} py-3`}
            color="default"
        >       
            <Grid className="container h-100 justify-content-between" container >                
                <Grid className="h-100" item>
                    <LogoComponent />
                </Grid>
                <Grid item className="d-none d-md-block">
                    {
                        headerRoutes.map((item, index) => <ListItem 
                            key={"header-item-" + index} 
                            className="px-3"
                            label={item.label} 
                            to={item.link}
                            current={pathname === item.link}
                        />)
                    }
                </Grid>
                <Grid item className="d-none d-md-block">
                    <Button variant="outlined" color="primary" className="text-uppercase border-2" >
                        <Add color="primary" fontSize="small" /> Post Ad For Free                      
                    </Button>
                </Grid>
                <Grid item className=" d-md-none">
                    <Button variant="text" color="primary" onClick={() => setSidebarOpen(true)}>
                        <Dehaze />                      
                    </Button>
                </Grid>
            </Grid>
            <SidebarComponent
                list={headerRoutes}
                onClose={handleSidebarClose}            
                open={sidebarOpen}    
            />
        </AppBar>
    )
}

export default HeaderComponent;