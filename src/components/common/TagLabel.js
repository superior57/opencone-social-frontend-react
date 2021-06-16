import React from "react";
import { Typography } from '@material-ui/core'

const TagLabel = ({
    className = "",
    color = "primary",
    children
}) => {
    return (
        <div className="d-flex">
            <Typography className={"p-2 " + className} color={color} style={{
                background: '#E9F6FF',
                borderRadius: 2,
                fontSize: '10px',                
            }}>
                {children}
            </Typography>
        </div>
    )
}

export default TagLabel;