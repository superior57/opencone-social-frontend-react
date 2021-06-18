import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core'

const AddressInformation = ({
    data = []
}) => {
    return (
        <Paper variant="outlined" square className="p-4 h-100 w-100">
            <Grid container spacing={1}>
                {
                    data.map(({ title, value }, index) => <Grid key={'address-info-' + index} item xs={12}>
                        <Typography variant="inherit" color="initial" className="py-2">{title}</Typography>
                        <Typography variant="subtitle2" color="primary" className="py-2">{value}</Typography>
                    </Grid>)
                }
            </Grid>
        </Paper>
    )
}

export default AddressInformation;