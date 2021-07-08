import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import AdItemPaper from '../ad/find/AdItemPaper';
const AllAdList = ({
    ads = []
}) => {
    console.log(ads);
    return <Grid container spacing={1}>
        {
            ads.length > 0 ? ads.map((ad, index) => <Grid key={"ad-item-" + index} item xs={12} md={12} lg={8}>
                <AdItemPaper 
                    data={ad} 
                />           
            </Grid>) : <Grid item xs={12} md={12} className="text-center py-4">
                <Typography variant="subtitle1" color="initial" align="center">No result</Typography>
            </Grid>
        }      
    </Grid>
}
export default AllAdList;