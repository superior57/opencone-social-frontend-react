import { Grid, Typography, TextField, Button, makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { loginUser } from "../../store/actions/authActions";

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.up('sm')]: {
            maxWidth: 300
        }
    }
}))

const LoginPage = () => {
    const classes = useStyles();
    const { register, handleSubmit} = useForm();
    const dispatch = useDispatch(null);
    const { errors } = useSelector(state => state);
    const auth = useSelector(state => state.auth);
    const history = useHistory();    

    useEffect(() => {
        if (localStorage.getItem('jwtToken')) {
            // if (history.goBack()) history.goBack();
            history.push('/home');
        }
    }, [auth])

    const onSubmit = data => {
        dispatch(loginUser(data));
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
                        <Button className="mb-3" variant="contained" color="primary" type="submit" size="large" fullWidth>
                            {"Login in"}                          
                        </Button>
                        <Grid className="text-end">
                            <Link to="/register">
                                <Typography variant="caption" color="primary">
                                    {"Don't you have an account?"}
                                </Typography>
                            </Link>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}

export default LoginPage;