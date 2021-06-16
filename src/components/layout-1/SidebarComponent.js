import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";

const SidebarComponent = ({
    open = false,
    onClose = () => {},
    list = []
}) => {
    return (
        <Drawer 
            anchor="right"
            open={open}
            onClose={onClose}
        >
            <div 
                role="presentation"
                onClick={onClose}
                onKeyDown={onClose}
            >
                <List>
                    {
                        list.map((li, index) => <ListItem button key={"menu-item-" + index}>
                            <Link to={li.link}>
                                <ListItemText primary={li.label} />
                            </Link>
                        </ListItem>)
                    }
                </List>
            </div>
        </Drawer>
    )
}

export default SidebarComponent;