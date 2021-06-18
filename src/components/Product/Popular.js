import React from 'react';
import { Paper, Grid, Typography } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Popular = ({
    data = []
}) => {
    return (
        <Paper variant="outlined" square className="p-4 h-100 w-100">
            <Grid container spacing={1} className="mb-3">
                <Grid item>
                    <Typography variant="h6" color="initial" className="text-black-50">
                        Most Popular 3 Bedrooms For Sale In Amman
                    </Typography>                    
                </Grid>
            </Grid>    
            <Grid container spacing={2}>
                {
                    data.map((d, index) => <Grid key={'popular-item-' + index} item xs={12} md={6}>
                        <Link to="#" className="text-decoration-none">
                            <Typography variant="subtitle2" color="primary">
                                <Search className="text-black-50" /> &nbsp;
                                {d}
                            </Typography>
                        </Link>
                    </Grid>)
                }
            </Grid>        
        </Paper>        
    )
}

export default Popular;