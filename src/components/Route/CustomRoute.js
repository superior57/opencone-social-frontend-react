import { Route } from "react-router-dom";
import { AuthRoute } from "../Auth";

const CustomRoute = ({ 
    component = <></>,
    path = "",
    roles = []
 }) => {
    if (roles.includes("client")) {
        return <AuthRoute path={path}>{ component }</AuthRoute>
    }
    return <Route exact path={path}>{ component }</Route>
}

export default CustomRoute;