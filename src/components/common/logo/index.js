import React from "react";
import LogoImg from "../../../assets/images/core-images/logo.png";
import { Link } from "react-router-dom";

const LogoComponent = () => {
    return(<Link to="/" className="h-100"><img className="h-100" src={LogoImg} alt=""/></Link>)
}

export default LogoComponent;