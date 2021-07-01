import { Redirect, Route } from "react-router-dom";
import jwt_decode from 'jwt-decode';

const AdminRoute = ({
    children,
    ...props
}) => {
    if (localStorage.getItem('jwtToken')) {  
        const user = jwt_decode(localStorage.getItem('jwtToken'));  
        if (user.role === "admin") {
            return <Route {...props} >{children}</Route>
        } else {
            return <Redirect to="/home" />
        }
    } else {
        return <Redirect to="/login" />
    }
}
export default AdminRoute;
