import { Button, makeStyles } from "@material-ui/core";
import React, {  } from "react";
import { Link } from "react-router-dom";
import { blue } from "@material-ui/core/colors";

import {
  Footermenudiv,
  Menudiv,
  Menuul,
  Menuulli,
  Menuliicondiv,
  Menulifontdiv,
} from "../../styles/layoutpage/footerpagestyle";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Add } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  menuItem: {
    color: '#787878',
    textDecoration: "none",
    '&:hover': {
      color: blue[600]
    }
  },
  addButton: {
    position: "absolute",
    minWidth: 0, 
    width: 40, 
    height: 40,
    color: '#404040',
    background: 'white',
    backgroundColor: "white",
    marginTop: -40,
    border: 'solid 1px #CCCCCC'
  }
}))


const Footer = () => {
  const classes = useStyles();  
  const { t } = useTranslation();
  const { isMobile } = useSelector(store => store.device);

  return (
    <Footermenudiv>
      <Button variant="contained" className={classes.addButton} style={{
        marginTop: isMobile ? 40 : -40
      }}>
        <Add />
      </Button>
      <Menudiv>
        <Menuul>
          <Menuulli>
            <Link to="#" className={classes.menuItem}>
              <Menuliicondiv>
                <i className="fa fa-home"></i>
              </Menuliicondiv>
              {!isMobile && <Menulifontdiv>{t('Home')}</Menulifontdiv>}
            </Link>
          </Menuulli>
          <Menuulli>
            <Link to="/home" className={classes.menuItem}>
              <Menuliicondiv>
                <i className="fa fa-search"></i>
              </Menuliicondiv>
              {!isMobile && <Menulifontdiv>{t('Explore')}</Menulifontdiv>}
            </Link>
          </Menuulli>
          <Menuulli>
            <Link to="/#" className={classes.menuItem}>
              <Menuliicondiv>
                <i className="fa fa-wechat"></i>
              </Menuliicondiv>
              {!isMobile && <Menulifontdiv>{t('My chats')}</Menulifontdiv>}
            </Link>            
          </Menuulli>
          <Menuulli>
            <Link to="/#" className={classes.menuItem}>
              <Menuliicondiv>
                <i className="fa fa-bell"></i>
              </Menuliicondiv>
              {!isMobile && <Menulifontdiv>{t('Notifications')}</Menulifontdiv>}
            </Link>            
          </Menuulli>
          <Menuulli>
            <Link to="/#" className={classes.menuItem}>
              <Menuliicondiv>
                <i className="fa fa-user"></i>
              </Menuliicondiv>
              {!isMobile && <Menulifontdiv>{t('Profile')}</Menulifontdiv>}
            </Link>
          </Menuulli>
        </Menuul>
      </Menudiv>
      
    </Footermenudiv>
  )
}

export default Footer;
