import React, { useState } from "react";
import {
    Maindiv,
    Navbardiv,
    Descriptiondiv,
    Headerdiv,
    Contentdiv,
    Footerdiv,
} from "../styles/mainpage/mainpagestyle";
  
import Navbar from "../components/DashboardLayout/Navbar";
import Header from "../components/DashboardLayout/Header";
import Content from "../components/DashboardLayout/Content";
import Footer from "../components/DashboardLayout/Footer";
import Drawer from '@material-ui/core/Drawer'
import { makeStyles, Button, IconButton } from "@material-ui/core";
import clsx from "clsx";
import { Dehaze, Close } from "@material-ui/icons";
import { Route, Switch } from "react-router-dom";
import ProductPage from "./ProductPage";
import { useSelector } from "react-redux";

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(8),
        },
    },
    header: {
        smallHeader: {
            backgroundColor: 'white',
            height: 70,
            alignItems: 'center'
        }
    },
}))

const DashboardPage = () => {
    const classes = useStyles();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const device = useSelector(store => store.device);
    const theme = useSelector(store => store.theme);

    return (
        <Maindiv>
            <Drawer
                variant={
                    device.isMobile ? "temporary" : "permanent"
                }
                open={sidebarOpen}
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: sidebarOpen,
                    [classes.drawerClose]: !sidebarOpen && !device.isMobile,
                })}
                classes={{
                    paper: clsx({
                    [classes.drawerOpen]: sidebarOpen,
                    [classes.drawerClose]: !sidebarOpen && !device.isMobile,
                    }),
                }}
                onClose={() => setSidebarOpen(false)}
            >   
                <div className={theme.direction === "rtl" ? "text-start" : "text-end"}>
                    {
                        sidebarOpen ? <IconButton aria-label="Close" onClick={() => setSidebarOpen(false)}>
                            <Close />
                        </IconButton> :
                        <Button variant="text" color="default" className="rounded-0" onClick={() => setSidebarOpen(true)} >
                            <Dehaze />              
                        </Button>
                    }
                </div>
                {
                    sidebarOpen && <Navbardiv className="navdiv">
                        <Navbar />
                    </Navbardiv>
                }
            </Drawer>
            <Descriptiondiv>
                <Headerdiv className={clsx("d-flex px-4 py-4", {
                    [classes.header]: device.isMobile
                })}>
                    <Button variant="text" color="default" className="rounded-0 d-md-none px-0" style={{ minWidth: 0 }} onClick={() => setSidebarOpen(true)}>
                        <Dehaze />              
                    </Button>
                    <Header></Header>
                </Headerdiv>
                <Contentdiv className="px-4 order-1 order-md-0">
                    <Switch>
                        <Route exact path="/dashboard">
                            <Content />                    
                        </Route>
                        <Route path="/dashboard/product">
                            <ProductPage />
                        </Route>
                    </Switch>
                </Contentdiv>
                <Footerdiv className="px-4 order-0 order-md-1">
                    <Footer></Footer>
                </Footerdiv>
            </Descriptiondiv>
        </Maindiv>
    )
}

export default DashboardPage;