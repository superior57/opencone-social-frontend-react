import { Redirect, Route } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { checkAuthenticate } from "../../store/actions/authActions";

const AuthRoute = ({
    children,
    ...props
}) => {
    // const dispatch = useDispatch(null);
    if (localStorage.getItem('jwtToken')) {
        // dispatch(checkAuthenticate());        
        return <Route {...props} >{children}</Route>
    } else {
        return <Redirect to="/login" />
    }
}
export default AuthRoute;
