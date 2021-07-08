import { Paper, Grid, Typography, Button, Divider, InputAdornment, useTheme, useMediaQuery } from "@material-ui/core";
import BadgeAvatar from "../common/BadgeAvatar";
import StarRate from "../common/StarRate";
import { CheckCircle, CalendarToday as CalendarIcon, Flag as FlangIcon, Phone as PhoneIcon, Add as AddIcon } from "@material-ui/icons";
import moment from "moment";
import { green, red } from "@material-ui/core/colors";

const TopProfile = ({
    user = {}
}) => {
    const dateFrom = moment(user.date);
    const theme = useTheme();
    const isWidthDownSm = useMediaQuery(theme.breakpoints.down('sm'));

    return <Paper elevation={0} square variant="outlined" className="p-3">
        <Grid container spacing={1}>
            <Grid item xs={12} md={6} style={{ borderRight: isWidthDownSm ? "" : 'solid 1px #78787850' }}>
                <Grid container spacing={3}>
                    <Grid item className="d-flex align-items-center">
                        <BadgeAvatar 
                            src={user.avatar}
                            gender={user.gender}
                            showBadge={false}
                        />
                    </Grid>         
                    <Grid item>
                        <Typography variant="subtitle1" color="primary">{ user.name }</Typography>
                        <div className="d-flex">
                            <StarRate />&nbsp;
                            <Typography variant="subtitle1" color="initial">
                                (33 reviews)
                            </Typography>
                        </div>
                        <Typography variant="subtitle1" color="primary" className="d-flex">
                            <CheckCircle />&nbsp;Verified
                        </Typography>
                        <Typography variant="subtitle1" color="initial">
                            <CalendarIcon />&nbsp;Member since {dateFrom.format('DD-MM-yyyy')}
                        </Typography>
                    </Grid>  
                    <Grid item>
                        <Button variant="text" color="primary" size="small">
                           <FlangIcon style={{ color: red[500] }} />&nbsp;Report Member                          
                        </Button>
                    </Grid>       
                </Grid>
            </Grid>    
            <Grid item xs={12} md={6} className="d-flex align-items-center">
                <Grid container spacing={1} justify="center">
                    <Grid item xs={12} md={6}>
                        <Button variant="contained" color="primary" style={{ backgroundColor: green[500] }} fullWidth className="mb-3">
                           <PhoneIcon />&nbsp; 079107735                 
                        </Button>
                        <Button variant="contained" color="primary" fullWidth>
                            <AddIcon />&nbsp; Follow                          
                        </Button>
                    </Grid>                  
                </Grid>
            </Grid>      
        </Grid>
    </Paper>
}
export default TopProfile;