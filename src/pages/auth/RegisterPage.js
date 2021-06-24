import { Grid, Typography, TextField, Button, makeStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import AvatarUpload from '../../components/common/avatar/AvatarUpload';
import { registerUser } from "../../store/actions/authActions";

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.up('sm')]: {
            maxWidth: 300
        }
    }
}))

const RegisterPage = () => {
    const classes = useStyles();
    const { register, handleSubmit} = useForm();
    const [avatar, setAvatar] = useState(null);
    const [gender, setGender] = useState("male");
    const dispatch = useDispatch(null);
    const { errors } = useSelector(state => state);
    const auth = useSelector(state => state.auth);
    const history = useHistory();
    

    useEffect(() => {
        if (localStorage.getItem('jwtToken')) {
            history.push('/home')
        }
    }, [auth])

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('password2', data.password2);
        formData.append('avatar', avatar);
        formData.append('gender', gender);

        dispatch(registerUser(formData, history));
    }

    const handleChangeAvatar = avatar => {
        setAvatar(avatar);
    }
    const handleChangeGender = genter => {
        setGender(genter);
    }

    return (
        <div className="py-3" >     
            <Grid container spacing={1} justify="center">
                <Grid item xs={12} className={classes.root}>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <Typography variant="subtitle2" className="text-center mb-3">
                            Log in or Register
                        </Typography> 
                        <TextField
                            {...register("name")}
                            className="mb-3"
                            label="Name"
                            variant="outlined"
                            fullWidth
                            required
                            error={errors.name && true}
                            helperText={errors.name}
                        />
                        <TextField
                            {...register("email", { required: true })}
                            className="mb-3"
                            label="Email"
                            variant="outlined"  
                            type="email"                
                            fullWidth         
                            required
                            error={errors.email && true}
                            helperText={errors.email}
                        />
                        <TextField
                            {...register("password", { required: true })}
                            className="mb-3"
                            label="Password"
                            variant="outlined"
                            type="password"
                            fullWidth
                            required
                            error={errors.password && true}
                            helperText={errors.password}
                        />   
                        <TextField
                            {...register("password2", { required: true })}
                            className="mb-3"
                            label="Password Confirmation"
                            variant="outlined"
                            type="password"
                            fullWidth
                            required
                            error={errors.password2 && true}
                            helperText={errors.password2}
                        />   
                        <AvatarUpload className="mb-3" onChange={handleChangeAvatar} onChangeGender={handleChangeGender} />
                        <Button className="mb-3" variant="contained" color="primary" type="submit" size="large" fullWidth>
                            {"Register"}                          
                        </Button>
                        <Grid className="text-end">
                            <Link to="/login">
                                <Typography variant="caption" color="primary">
                                    {"Already have an account?"}
                                </Typography>
                            </Link>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}

export default RegisterPage;