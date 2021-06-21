import React from "react";
import { Grid, Typography, Button, Paper } from "@material-ui/core";
import TagItem from "../common/TagLabel";
import { Link } from "react-router-dom";
import { DriveEta, ArrowForward } from "@material-ui/icons";

const ProductCart = ({
    image = "",
    tags = [],
    name = "",
    link = "#"
}) => {
    return (
        <Paper elevation={3}>
            <img width={"100%"} height={"auto"} src={image} alt="product 1" />                        
            <div className="p-3">
                <div className="d-flex justify-content-between align-items-center pb-2">
                    <Typography color="initial" variant="subtitle2"> <DriveEta color="disabled" /> {name}</Typography>
                    <Link className="text-decoration-none" to={link}>
                        <Button color="primary" style={{
                            fontSize: '12px'
                        }}>
                            VIEW MORE                            
                            <ArrowForward className="pl-2" style={{ fontSize: '16px' }} />      
                        </Button>
                    </Link>
                </div>
                <Grid className="" container spacing={1}>
                    {
                        tags.map((tagName, index) => <Grid key={"tag-" + index} item>
                            <TagItem>
                                {tagName}
                            </TagItem>
                        </Grid> )
                    }
                </Grid>
            </div>
        </Paper>
    )
}

export default ProductCart;