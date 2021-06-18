import React from 'react';
import { Button } from "@material-ui/core";
import { green, red } from '@material-ui/core/colors';
import { dark } from '@material-ui/core/styles/createPalette';

const ColorButton = ({
    color = "",
    textColor = "white",
    children,
    outlined = false,
    className = "",
    fullWidth = true,
    size = 'medium'
}) => {
    let bgColor = "", borderColor = "";

    const setColor = (comingColor) => {
        bgColor = outlined ? "white" : comingColor;
        borderColor = outlined ? comingColor : "white";
        textColor = outlined ? comingColor : "white";
    }

    switch (color) {
        case "success":
            setColor(green[400]); break;    
        case "danger":
            setColor(red[400]); break;    
        default:
            setColor(dark[400])
            break;
    }
    
    return <Button
        size={size}
        fullWidth={fullWidth}
        className={className}
        variant={outlined ? "outlined" : "contained"}
        style={{
            backgroundColor: bgColor,
            borderColor: borderColor,
            color: textColor,
            '& *': {
                color: textColor
            },
            textTransform: 'none',
        }}
    >
        { children }      
    </Button>
}

export default ColorButton;