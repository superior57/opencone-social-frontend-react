import { Grid, Paper, Typography } from "@material-ui/core";

const AdSectionPaper = ({ 
    title, 
    children, 
    ...otherProps 
}) => {
    return <Paper elevation={0} square variant="outlined" className="p-3" {...otherProps}>
        <Typography variant="h6" color="initial" className="text-black-50 mb-2">{title}</Typography>
        <Grid container spacing={1} justify="center">
            <Grid item xs={12} md={10} lg={9} xl={8}>
            {
                children
            }
            </Grid>          
        </Grid>
    </Paper>
}

export default AdSectionPaper;