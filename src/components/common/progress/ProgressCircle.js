import { CircularProgress, Grid } from "@material-ui/core"

const ProgressCircle = () => {
    return <Grid 
        container 
        spacing={1} 
        justify="center"
        alignItems="center"
        style={{
            minHeight: 400
        }}
    >
        <Grid item>
            <CircularProgress />
        </Grid>      
    </Grid>
}

export default ProgressCircle;