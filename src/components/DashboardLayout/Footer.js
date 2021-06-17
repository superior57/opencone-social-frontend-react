import { makeStyles } from "@material-ui/core";
import React, {  } from "react";
import { Link } from "react-router-dom";
import { blue } from "@material-ui/core/colors";

import {
  Footermenudiv,
  Menudiv,
  Addiconbutton,
  Menuul,
  Menuulli,
  Menuliicondiv,
  Menulifontdiv,
} from "../../styles/layoutpage/footerpagestyle";

const useStyles = makeStyles(theme => ({
  menuItem: {
    color: '#787878',
    textDecoration: "none",
    '&:hover': {
      color: blue[600]
    }
  }
}))


const Footer = () => {
  const classes = useStyles();  
  return (
    <Footermenudiv>
      <Menudiv>
        <Menuul>
          <Menuulli>
            <Link to="#" className={classes.menuItem}>
              <Menuliicondiv>
                <i className="fa fa-home"></i>
              </Menuliicondiv>
              <Menulifontdiv>Home</Menulifontdiv>
            </Link>
          </Menuulli>
          <Menuulli>
            <Link to="/home" className={classes.menuItem}>
              <Menuliicondiv>
                <i className="fa fa-search"></i>
              </Menuliicondiv>
              <Menulifontdiv>Explore</Menulifontdiv>
            </Link>
          </Menuulli>
          <Menuulli>
            <Link to="/#" className={classes.menuItem}>
              <Menuliicondiv>
                <i className="fa fa-wechat"></i>
              </Menuliicondiv>
              <Menulifontdiv>My chats</Menulifontdiv>
            </Link>            
          </Menuulli>
          <Menuulli>
            <Link to="/#" className={classes.menuItem}>
              <Menuliicondiv>
                <i className="fa fa-bell"></i>
              </Menuliicondiv>
              <Menulifontdiv>Notifications</Menulifontdiv>
            </Link>            
          </Menuulli>
          <Menuulli>
            <Link to="/#" className={classes.menuItem}>
              <Menuliicondiv>
                <i className="fa fa-user"></i>
              </Menuliicondiv>
              <Menulifontdiv>Profile</Menulifontdiv>
            </Link>
          </Menuulli>
        </Menuul>
      </Menudiv>
      <Addiconbutton>
        <i className="fa fa-plus"></i>
      </Addiconbutton>
    </Footermenudiv>
  )
}

export default Footer;
