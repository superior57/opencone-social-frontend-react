import React, { Component } from "react";

import {
  Backimgdiv,
  Backopacitydiv,
  Adpostdiv,
  Adpostmenu,
  Adpostbuttondiv,
  Adpostdivsmallp,
  Adpostdivbigp,
  Adpostdivbutton,
} from "../../styles/layoutpage/contentpagestyle";

import Mainadimage from "../Content/Mainadimage";

class Content extends Component {
  render() {
    return (
      <div>
        <Backopacitydiv></Backopacitydiv>
        <Backimgdiv>
          <Adpostdiv>
            <Adpostbuttondiv>
              <Adpostdivsmallp>Want to make money</Adpostdivsmallp>
              <Adpostdivbigp>Buy. Chat. Sell</Adpostdivbigp>
              <Adpostdivbutton>
                <i className="fa fa-plus"></i>&nbsp;&nbsp;&nbsp;POST AD FOR FREE
              </Adpostdivbutton>
            </Adpostbuttondiv>

            <Adpostmenu>
              <Mainadimage></Mainadimage>
              <Mainadimage></Mainadimage>
              <Mainadimage></Mainadimage>
              <Mainadimage></Mainadimage>
              <Mainadimage></Mainadimage>
              <Mainadimage></Mainadimage>
            </Adpostmenu>
          </Adpostdiv>
        </Backimgdiv>
      </div>
    );
  }
}

export default Content;
