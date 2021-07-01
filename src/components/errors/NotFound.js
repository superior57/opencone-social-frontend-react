import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const NotFound = ({
    text = ""
}) => {
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
            <Typography variant="h1" className="text-black-50" color="initial">{text}</Typography>
        </Grid>      
    </Grid>
}

export default NotFound;