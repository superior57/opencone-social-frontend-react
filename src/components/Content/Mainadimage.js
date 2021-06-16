import React, { Component } from "react";
import {
  Menuimagediv,
  Menudivsubimg,
  Menudivdescription,
  Menudivdescriptionspanleft,
  Menudivdescriptionspanright,
  Menuavatardiv,
  Menuavatarright,
} from "../../styles/layoutpage/contentpagestyle";

import Menusubimage from "./Menusubimage";
import Mainavatar from "./Mainavatar";

class Mainadimage extends Component {
  render() {
    return (
      <Menuimagediv>
        <Menudivsubimg>
          <a href="/#">
            <Menusubimage></Menusubimage>
          </a>
        </Menudivsubimg>
        <Menudivdescription>
          <Menudivdescriptionspanleft>
            <i className="fa fa-building"></i>Condominiums
          </Menudivdescriptionspanleft>
          <Menudivdescriptionspanright>Rent</Menudivdescriptionspanright>
          <div className="clear"></div>
        </Menudivdescription>
        <Menuavatardiv>
          <Menudivdescriptionspanleft>
            <Mainavatar></Mainavatar>
          </Menudivdescriptionspanleft>
          <Menuavatarright>$1,400</Menuavatarright>
          <div className="clear"></div>
        </Menuavatardiv>
      </Menuimagediv>
    );
  }
}

export default Mainadimage;
