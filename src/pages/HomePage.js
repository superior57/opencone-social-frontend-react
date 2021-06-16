import React from "react";
import {
    Maindiv,
    Navbardiv,
    Descriptiondiv,
    Headerdiv,
    Contentdiv,
    Footerdiv,
} from "../styles/mainpage/mainpagestyle";
  
import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";
import Content from "../components/layout/Content";
import Footer from "../components/layout/Footer";

const HomePage = () => {
    return (<Maindiv>
        <Navbardiv className="navdiv">
        <Navbar></Navbar>
        </Navbardiv>
        <Descriptiondiv>
        <Headerdiv>
            <Header></Header>
        </Headerdiv>
        <Contentdiv>
            <Content></Content>
        </Contentdiv>
        <Footerdiv>
            <Footer></Footer>
        </Footerdiv>
        </Descriptiondiv>
    </Maindiv>)
}

export default HomePage;