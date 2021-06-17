import React, {  } from "react";
import HeaderComponent from "../components/LandingLayout/HeaderComponent";
import HeroSectionComponent from "../components/LandingLayout/HeroSectionComponent";
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