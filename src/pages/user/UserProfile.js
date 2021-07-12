import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid'
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/actions/authActions";
import TopProfile from "../../components/user/TopProfile";
import { Paper, Typography } from "@material-ui/core";
import AllAdList from "../../components/user/AllAdList";

const UserProfile = () => {
    const history = useHistory();
    const { tempUser } = useSelector(state => state.auth);
    const currentId = history.location.pathname.replace('/u/', '').trim();
    const dispatch = useDispatch(null);

    useEffect(() => {
        dispatch(getUser(currentId));
    }, [currentId])
    useEffect(() => {
        console.log(tempUser);
    }, [tempUser])

    return <Grid container spacing={1}>
        <Grid item xs={12}>
            <TopProfile user={tempUser} />
        </Grid>      
        <Grid item xs={12}>
            <Paper elevation={0} square variant='outlined' className="p-3">
                <Typography variant="h5" color="initial">All Ads</Typography>
                <AllAdList ads={tempUser.ads} />
            </Paper>
        </Grid>
    </Grid>
}
export default UserProfile;