import React from "react";
import { AppBar } from "@material-ui/core";
import LogoComponent from "../components/common/logo";


const ArtBoardPage = () => {

    return (<div>
        <AppBar
            className="py-3"
        >       
            <LogoComponent />
        </AppBar>
    </div>)
}

export default ArtBoardPage;