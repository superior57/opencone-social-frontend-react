import React, { Component } from "react";

import {
  Footermenudiv,
  Menudiv,
  Addiconbutton,
  Menuul,
  Menuulli,
  Menuliicondiv,
  Menulifontdiv,
} from "../../styles/layoutpage/footerpagestyle";

class Footer extends Component {
  render() {
    return (
      <Footermenudiv>
        <Menudiv>
          <Menuul>
            <Menuulli>
              <Menuliicondiv>
                <i className="fa fa-home"></i>
              </Menuliicondiv>
              <Menulifontdiv>Home</Menulifontdiv>
            </Menuulli>
            <Menuulli>
              <Menuliicondiv>
                <i className="fa fa-search"></i>
              </Menuliicondiv>
              <Menulifontdiv>Explore</Menulifontdiv>
            </Menuulli>
            <Menuulli>
              <Menuliicondiv>
                <i className="fa fa-wechat"></i>
              </Menuliicondiv>
              <Menulifontdiv>My chats</Menulifontdiv>
            </Menuulli>
            <Menuulli>
              <Menuliicondiv>
                <i className="fa fa-bell"></i>
              </Menuliicondiv>
              <Menulifontdiv>Notifications</Menulifontdiv>
            </Menuulli>
            <Menuulli>
              <Menuliicondiv>
                <i className="fa fa-user"></i>
              </Menuliicondiv>
              <Menulifontdiv>Profile</Menulifontdiv>
            </Menuulli>
          </Menuul>
        </Menudiv>
        <Addiconbutton>
          <i className="fa fa-plus"></i>
        </Addiconbutton>
      </Footermenudiv>
    );
  }
}

export default Footer;
