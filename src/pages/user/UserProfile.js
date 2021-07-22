import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid'
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../../store/actions/authActions";
import TopProfile from "../../components/user/TopProfile";
import { Paper, Typography, TextField, Button, 
    DialogContent, DialogTitle, IconButton, Dialog, useTheme, useMediaQuery, MenuItem, makeStyles, FormControl, Checkbox, FormControlLabel
} from "@material-ui/core";
import AllAdList from "../../components/user/AllAdList";
import AvatarUpload from "../../components/common/avatar/AvatarUpload";
import { useForm } from "react-hook-form";
import { Close as CloseIcon } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    profileItem: {
        height: 70,
        '& li': {
            height: '100%'
        }
    },
}))

const UserProfile = () => {
    const history = useHistory();
    const classes = useStyles();
    const { tempUser } = useSelector(state => state.auth);
    const auth = useSelector(state => state.auth);
    const currentId = history.location.pathname.replace('/u/', '').trim();
    const dispatch = useDispatch(null);
    const { handleSubmit } = useForm();
    const [open, setOpen] = useState(false); 
    const initialData = {
        name: "",
        email: "",
        password: "",
        password2: "",
        avatar: "",
        gender: "male",
    }
    const [data, setData] = useState(initialData);
    const errors = useSelector(state => state.errors);
    const [pass, setPass] = useState(false);
    const theme = useTheme();
    const isWidthDownSm = useMediaQuery(theme.breakpoints.down('sm'));
    var likeCount = 0; 
    tempUser.ads?.forEach(ad => likeCount += ad.likes.length);
    
    useEffect(() => {
        dispatch(getUser(currentId));
    }, [currentId])
    useEffect(() => {
        setData({
            ...data,
            ...auth.user
        })
    }, [auth.user])

    const handleSave = () => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('password2', data.password2);
        formData.append('avatar', data.avatar);
        formData.append('gender', data.gender);
        formData.append('is_blocked', data.is_blocked);
        formData.append('pass', pass);
        
        dispatch(updateUser(data.id, formData));
        setOpen(false);
    }

    const handleEdit = () => {
        setOpen(true);
    }

    return <Grid container spacing={1}>
        <Grid item xs={12}>
            <TopProfile userId={tempUser._id === auth.user.id ? auth.user.id : tempUser._id} user={tempUser._id === auth.user.id ? auth.user : tempUser} onEdit={handleEdit}  />
        </Grid>      
        <Grid item xs={12}>
            {
                auth.user.id === tempUser._id && <Paper elevation={0} square variant='outlined' className="p-3">
                    <Grid container spacing={0}>
                        <Grid item xs={4} className={classes.profileItem}>
                            <MenuItem onClick={() => {}}>
                                <Grid container spacing={1} justify="center">
                                    <Grid item xs={12} className="text-center">
                                        <Typography variant="subtitle1" color="initial">{tempUser.ads?.length} </Typography>                                
                                    </Grid>    
                                    <Grid item xs={12} className="text-center">
                                        <Typography variant="subtitle2" color="initial">Ads</Typography>
                                    </Grid>                         
                                </Grid>
                            </MenuItem>
                        </Grid>
                        <Grid item xs={4} className={classes.profileItem}>
                            <MenuItem>
                                <Grid container spacing={1} justify="center">
                                    <Grid item xs={12} className="text-center">
                                        <Typography variant="subtitle2" color="initial">{likeCount}</Typography>
                                    </Grid>    
                                    <Grid item xs={12} className="text-center">
                                        <Typography variant="subtitle2" color="initial">Favorites</Typography>
                                    </Grid>                         
                                </Grid>
                            </MenuItem>                        
                        </Grid>
                        <Grid item xs={4} className={classes.profileItem}>
                            <MenuItem>
                                <Grid container spacing={1} justify="center">
                                    <Grid item xs={12} className="text-center">
                                        <Typography variant="subtitle2" color="initial">0</Typography>
                                    </Grid>    
                                    <Grid item xs={12} className="text-center">
                                        <Typography variant="subtitle2" color="initial">Views</Typography>
                                    </Grid>                         
                                </Grid>
                            </MenuItem>
                        </Grid>
                    </Grid>
                </Paper>
            }         
             
        </Grid>
        <Grid item xs={12}>
            <Paper elevation={0} square variant='outlined' className="p-3">
                <Typography variant="h5" color="initial">All Ads</Typography>
                <AllAdList ads={tempUser.ads} />
            </Paper>  
        </Grid>
        <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="" fullWidth fullScreen={isWidthDownSm}>
          <DialogTitle>
            Update your profile
            <IconButton aria-label="" onClick={() => setOpen(false)} className=" float-end">
                <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent className="py-3">
            <form onSubmit={handleSubmit(handleSave)}>
                <AvatarUpload 
                    defaultSrc={data.avatar}
                    defaultGender={data.gender}
                    className="mb-3" 
                    onChange={avatar => setData({...data, avatar: avatar})}
                    onChangeGender={gender => setData({...data, gender})}
                />  
                <TextField            
                    label="Name"
                    variant="outlined"
                    fullWidth
                    className="mb-3"
                    value={data.name}
                    onChange={ev => setData({...data, name: ev.target.value})}
                    required
                    error={!!errors.name}
                    helperText={errors.name}
                />    
                <TextField                
                    label="Email"
                    variant="outlined"
                    fullWidth
                    className="mb-3"
                    type="email"
                    value={data.email}
                    onChange={ev => setData({...data, email: ev.target.value})}
                    required
                    error={!!errors.email}
                    helperText={errors.email}
                />  
                <TextField                
                    label="Credits for Boost"
                    variant="outlined"
                    fullWidth
                    className="mb-3"
                    type="email"
                    value={data.boost_credits}
                    InputProps={{
                        readOnly: true
                    }}
                />  
                <FormControl className="mb-1">
                    <FormControlLabel
                      label="Change password"
                      control={
                        <Checkbox
                          checked={pass}
                          onChange={ev => setPass(!pass)}
                          color="primary"
                        />
                      }
                    />
                </FormControl>    
                <TextField              
                    label="Password"
                    variant="outlined"
                    fullWidth
                    className="mb-3"
                    type="password"
                    value={data.password}
                    onChange={ev => setData({...data, password: ev.target.value})}
                    error={!!errors.password}
                    helperText={errors.password}
                    disabled={!pass}
                /> 
                <TextField               
                    label="Password Confirmation"
                    variant="outlined"
                    fullWidth
                    className="mb-3"
                    type="password"
                    value={data.password2}
                    onChange={ev => setData({...data, password2: ev.target.value})}
                    error={!!errors.password2}
                    helperText={errors.password2}
                    disabled={!pass}
                /> 
                <Button variant="contained" color="primary" type="submit" fullWidth>
                    Save                  
                </Button>
            </form>
          </DialogContent>
        </Dialog>          
    </Grid>
}
export default UserProfile;