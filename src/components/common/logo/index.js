import React from "react";
import LogoImg from "../../../assets/images/core-images/logo.png";
import { Link } from "react-router-dom";

const LogoComponent = () => {
    return(<Link to="/">
            <img src={LogoImg} width={150} alt=""/>
    </Link>)
}

export default LogoComponent;