import React, { useLayoutEffect, useState } from "react";
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
import { isMobile as isMobileFnc } from "../utils/Device";

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
    const [isMobile, setIsMobile] = useState(isMobileFnc());
    
    useLayoutEffect(() => {
        console.log("updating layout");
        const updateSize = () => {
            setIsMobile(isMobileFnc());
        }
        window.addEventListener('resize', updateSize)
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, [])

    return (<Maindiv>
        <Drawer
          variant={
              isMobile ? "temporary" : "permanent"
          }
          open={sidebarOpen}
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: sidebarOpen,
            [classes.drawerClose]: !sidebarOpen && !isMobile,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: sidebarOpen,
              [classes.drawerClose]: !sidebarOpen && !isMobile,
            }),
          }}
          onClose={() => setSidebarOpen(false)}
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