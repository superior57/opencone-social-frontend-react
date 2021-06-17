import React, { Component } from "react";
import {
  Menudivsubimg,
  Menudivdescription,
  Menudivdescriptionspanleft,
  Menudivdescriptionspanright,
  Menuavatardiv,
  Menuavatarright,
} from "../../styles/layoutpage/contentpagestyle";
import Menusubimage from "./Menusubimage";
import Mainavatar from "./Mainavatar";
import { Paper } from "@material-ui/core";

class Mainadimage extends Component {
  render() {
    return (
      <Paper elevation={3} className="overflow-hidden">
        <Menudivsubimg>
          <a href="/#">
            <Menusubimage></Menusubimage>
          </a>
        </Menudivsubimg>
        <Menudivdescription>
          <Menudivdescriptionspanleft>
            <i className="fa fa-building"></i>{this.props.name}
          </Menudivdescriptionspanleft>
          <Menudivdescriptionspanright>Rent</Menudivdescriptionspanright>
          <div className="clear"></div>
        </Menudivdescription>
        <Menuavatardiv>
          <Menudivdescriptionspanleft>
            <Mainavatar></Mainavatar>
          </Menudivdescriptionspanleft>
          <Menuavatarright>${this.props.price}</Menuavatarright>
          <div className="clear"></div>
        </Menuavatardiv>
      </Paper>
    );
  }
}

export default Mainadimage;
