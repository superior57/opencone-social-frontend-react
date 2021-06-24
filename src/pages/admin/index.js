import { Switch } from "react-router-dom";
import AdminLayout from "../../components/admin/Layout/AdminLayout";
import CustomRoute from "../../components/Route/CustomRoute";
import { routeConfig } from "../../utils/routeConfig";

const AdminPage = () => {
    const { adminRoutes } = routeConfig;
    return <>
        <AdminLayout>
            <Switch>
            {
                adminRoutes.map((route, index) => <CustomRoute key={'route-' + index} {...route} />)
            }
            </Switch>
        </AdminLayout>
    </>
}

export default AdminPage;