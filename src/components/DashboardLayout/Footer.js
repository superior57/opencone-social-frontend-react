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
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <Footermenudiv>
      <Menudiv>
        <Menuul>
          <Menuulli>
            <Link to="#" className={classes.menuItem}>
              <Menuliicondiv>
                <i className="fa fa-home"></i>
              </Menuliicondiv>
              <Menulifontdiv>{t('Home')}</Menulifontdiv>
            </Link>
          </Menuulli>
          <Menuulli>
            <Link to="/home" className={classes.menuItem}>
              <Menuliicondiv>
                <i className="fa fa-search"></i>
              </Menuliicondiv>
              <Menulifontdiv>{t('Explore')}</Menulifontdiv>
            </Link>
          </Menuulli>
          <Menuulli>
            <Link to="/#" className={classes.menuItem}>
              <Menuliicondiv>
                <i className="fa fa-wechat"></i>
              </Menuliicondiv>
              <Menulifontdiv>{t('My chats')}</Menulifontdiv>
            </Link>            
          </Menuulli>
          <Menuulli>
            <Link to="/#" className={classes.menuItem}>
              <Menuliicondiv>
                <i className="fa fa-bell"></i>
              </Menuliicondiv>
              <Menulifontdiv>{t('Notifications')}</Menulifontdiv>
            </Link>            
          </Menuulli>
          <Menuulli>
            <Link to="/#" className={classes.menuItem}>
              <Menuliicondiv>
                <i className="fa fa-user"></i>
              </Menuliicondiv>
              <Menulifontdiv>{t('Profile')}</Menulifontdiv>
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
