import React from 'react';
import { Paper, Grid, Typography, Button } from "@material-ui/core";

const Comments = ({
    data = []
}) => {
    return (
        <Paper variant="outlined" square className="p-4 h-100 w-100">
            <Grid container spacing={1} justify="space-between" className="mb-3">
                <Grid item>
                    <Typography variant="h6" color="initial" className="text-black-50">
                        Comments
                    </Typography>                    
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" className="float-end">
                        Submit a Comment
                    </Button>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                {
                    data.map(({title, value}, index) => <Grid key={'comment-item-' + index} item>
                        <Typography variant="subtitle2" color="primary" className="py-2">{title}</Typography>
                        <Typography variant="inherit" color="initial" className="py-2">{value}</Typography>
                    </Grid>)
                }              
            </Grid>
        </Paper>
    )
}

export default Comments;