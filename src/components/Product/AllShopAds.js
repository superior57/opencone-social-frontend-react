import React from 'react';
import { Paper, Typography, Grid, Button, Avatar, Divider } from "@material-ui/core";
import { HotelSold } from '../../@/icons';
import TagLabel from '../common/TagLabel';

const AllShopAds = ({
    data = []
}) => {
    return (
        <Paper variant="outlined" square className="p-4 h-100 w-100">
            <Grid container spacing={1} justify="space-between" className="mb-3">
                <Grid item>
                    <Typography variant="h6" color="initial" className="text-black-50">
                        إسكان المنصور Al Mansour Housing
                    </Typography>                    
                </Grid>
                <Grid item>
                    <Button variant="text" color="primary" size="small" className="float-end">
                        All Shop Ads
                    </Button>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                {
                    data.map(({ img, title, status, avatar, price }, index) => index < 4 && <Grid key={'ad-item-' + index} item xs={12} sm={6} md={4} lg={3}>
                        <Paper elevation={2} className="overflow-hidden">
                            <img src={img} width="100%" height={100} alt="" />
                            <div className="p-3">
                                <Grid container spacing={1} justify="space-between" className="py-2">
                                    <Grid item>
                                        <Typography variant="subtitle2" color="initial">
                                            <HotelSold /> &nbsp;
                                            {title}                                        
                                        </Typography>
                                    </Grid>
                                    <Grid item className="text-black-50">
                                        {status}                                    
                                    </Grid>
                                </Grid>   
                                <Divider className="mb-3" style={{
                                    backgroundColor: '#CCCCCC'
                                }} />
                                <Grid container spacing={1} justify="space-between" alignItems="center">      
                                    <Grid item>
                                        <Avatar src={avatar} alt="" />
                                    </Grid>       
                                    <Grid item>
                                        <TagLabel className="py-0" size="medium">
                                            $ {price}
                                        </TagLabel>
                                    </Grid>                                                         
                                </Grid>   
                            </div>                        
                        </Paper>
                    </Grid>)
                }
            </Grid>
        </Paper>
    )
}

export default AllShopAds;