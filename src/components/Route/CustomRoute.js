import { Route } from "react-router-dom";
import AdminRoute from "./AdminRoute";
import AuthRoute from "./AuthRoute";

const CustomRoute = ({ 
    component = <></>,
    path = "",
    roles = []
 }) => {
    if (roles.includes("client")) {
        return <AuthRoute path={path}>{ component }</AuthRoute>
    }
    if (roles.includes("admin")) {
        return <AdminRoute path={path}>{ component }</AdminRoute>
    }
    return <Route exact path={path}>{ component }</Route>
}

export default CustomRoute;