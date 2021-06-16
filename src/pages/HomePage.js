import React, {  } from "react";
import HeaderComponent from "../components/layout-1/HeaderComponent";
import HeroSectionComponent from "../components/layout-1/HeroSectionComponent";
import ProductContent from "../components/ProductContent";

const HomePage = () => {   

    return (<div>
        <HeaderComponent />
        <div className="body-wrapper">
            <HeroSectionComponent />      
            <ProductContent />
        </div>
    </div>)
}

export default HomePage;