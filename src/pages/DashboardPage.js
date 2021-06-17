import React, { useState } from "react";
import {
    Maindiv,
    Navbardiv,
    Descriptiondiv,
    Headerdiv,
    Contentdiv,
    Footerdiv,
} from "../styles/mainpage/mainpagestyle";
  
import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";
import Content from "../components/layout/Content";
import Footer from "../components/layout/Footer";
import Drawer from '@material-ui/core/Drawer'
import { makeStyles, Button, IconButton } from "@material-ui/core";
import clsx from "clsx";
import { Dehaze, Close } from "@material-ui/icons";

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
    }
}))

const DashboardPage = () => {
    const classes = useStyles();
    const [sidebarOpen, setSidebarOpen] = useState(true);
    return (<Maindiv>
        <Drawer
          variant={
              window.innerWidth < 450 ? "temporary" : "permanent"
          }
          open={sidebarOpen}
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: sidebarOpen,
            [classes.drawerClose]: !sidebarOpen,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: sidebarOpen,
              [classes.drawerClose]: !sidebarOpen,
            }),
          }}         
        >   
            <div className="text-end">
                {
                    sidebarOpen ? <IconButton aria-label="Close" onClick={() => setSidebarOpen(false)}>
                        <Close />
                    </IconButton> :
                    <Button variant="text" color="default" className="rounded-0" onClick={() => setSidebarOpen(true)}>
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
            <Headerdiv className="d-flex px-4 py-4">
                <Button variant="text" color="default" className="rounded-0 d-md-none" onClick={() => setSidebarOpen(true)}>
                    <Dehaze />              
                </Button>
                <Header></Header>
            </Headerdiv>
            <Contentdiv className="px-4">
                <Content></Content>
            </Contentdiv>
            <Footerdiv className="px-4">
                <Footer></Footer>
            </Footerdiv>
        </Descriptiondiv>
    </Maindiv>)
}

export default DashboardPage;