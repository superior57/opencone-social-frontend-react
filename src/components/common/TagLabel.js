import React from "react";
import { Typography } from '@material-ui/core'

const TagLabel = ({
    className = "",
    color = "primary",
    children,
    square = false,
    bgColor = '#E9F6FF',
    size = "small",
    textColor = ""
}) => {
    return (
        <div className="d-flex">
            <Typography className={"p-2 " + className} color={color} style={{
                background: bgColor,
                borderRadius: square ? 0 : 2,
                fontSize: size === "small" ? '10px' : '',      
                color: textColor          
            }}>
                {children}
            </Typography>
        </div>
    )
}

export default TagLabel;