import React, {  } from "react";
import BackgroundImg from "../../assets/images/core-images/background.png";
import { Parallax } from 'react-parallax';
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
    },
    parallaxContent: {
        position: "absolute",
        top: 0,
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#000000d6',
    }

}))

const HeroSectionComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Parallax y={{ min: -150, max: 15 }} bgImage={BackgroundImg} strength={200}>
                <div  style={{ height: '45vh' }}>
                    <div className={classes.parallaxContent}>
                        <div className="text-center">
                            <Typography className="text-white">
                                Want to make money?
                            </Typography>
                            <Typography variant="h4" className="text-white fw-bold">
                                Buy. Chat. Sell
                            </Typography>
                        </div>
                    </div>
                </div>
            </Parallax>     
        </div>
    )
}

export default HeroSectionComponent;