import CategoryManagement from "../components/admin/Category/CategoryManagement"
import FieldManagement from "../components/admin/Field/FieldManagement"
import { default as Home } from "../components/DashboardLayout/Content"
import AdFindPage from "../pages/ad/AdFindPage"
import AdPostPage from "../pages/ad/AdPostPage"
import LoginPage from "../pages/auth/LoginPage"
import RegisterPage from "../pages/auth/RegisterPage"
import ProductPage from "../pages/dashboard/ProductPage"
import Explore from "../pages/HomePage"

export const routeConfig = {
    landingLayoutRoutes: [
        {
            path: "/explore",
            component: <Explore />,
            roles: []            
        }
    ],
    dashboardLayoutRoutes: [
        {
            path: "/home",
            component: <Home />,
            roles: []
        },
        {
            path: "/login",
            component: <LoginPage />,
            roles: []
        },
        {
            path: "/register",
            component: <RegisterPage />,
            roles: []
        },
        {
            path: "/product",
            component: <ProductPage />,
            roles: ["client"]
        },
        {
            path: "/ad",
            component: <AdPostPage />,
            roles: ["client"]
        },        
        {
            path: "/find",
            component: <AdFindPage />,
            roles: ["client"]
        },
        {
            path: "/admin/category-management",
            component: <CategoryManagement />,
            roles: ["admin"]            
        },
        {
            path: "/admin/field-management",
            component: <FieldManagement />,
            roles: ["admin"]
        },
    ],
    adminRoutes: [
        
    ],
}