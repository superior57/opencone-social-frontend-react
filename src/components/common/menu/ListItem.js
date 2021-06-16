import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const ListItem = ({
    label = "",
    to = "",
    current = false,
    className = ""
}) => {
    return (
        <Link to={to} className="text-decoration-none">
            <Button 
                variant="text" 
                color={current ? "primary" : "default"} 
                className={className + " rounded-0 text-capitalize"}
            >
                { label }
            </Button>
        </Link>
    )
}

export default ListItem;