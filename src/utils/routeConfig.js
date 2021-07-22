import AdManagement from "../components/admin/Ads/AdManagement"
import CategoryManagement from "../components/admin/Category/CategoryManagement"
import CityManagement from "../components/admin/City/CityManagement"
import FieldManagement from "../components/admin/Field/FieldManagement"
import UserManagement from "../components/admin/Users/UserManagement"
import { default as Home } from "../components/DashboardLayout/Content"
import AdFindPage from "../pages/ad/AdFindPage"
import AdPostPage from "../pages/ad/AdPostPage"
import LoginPage from "../pages/auth/LoginPage"
import RegisterPage from "../pages/auth/RegisterPage"
import ChatPage from "../pages/chat/ChatPage"
import AdDetailsPage from "../pages/dashboard/AdDetailsPage"
import Explore from "../pages/HomePage"
import UserProfile from "../pages/user/UserProfile"
import { roles } from "./roles"

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
            path: "/ads/:id",
            component: <AdDetailsPage />,
            roles: [roles.client]
        },
        {
            path: "/ad",
            component: <AdPostPage />,
            roles: [roles.client]
        },        
        {
            path: "/ads",
            component: <AdFindPage />,
            roles: [roles.client]
        },
        {
            path: '/chat',
            component: <ChatPage />,
            roles: [roles.client]
        },
        {
            path: "/u/:id",
            component: <UserProfile />,
            roles: [roles.client]
        },
        {
            path: "/admin/category-management",
            component: <CategoryManagement />,
            roles: [roles.admin]            
        },
        {
            path: "/admin/field-management",
            component: <FieldManagement />,
            roles: [roles.admin]
        },
        {
            path: "/admin/city-management",
            component: <CityManagement />,
            roles: [roles.admin]
        },
        {
            path: "/admin/user-management",
            component: <UserManagement />,
            roles: [roles.admin]
        },
        {
            path: "/admin/ad-management",
            component: <AdManagement />,
            roles: [roles.admin, roles.client]
        }
        
    ],
    adminRoutes: [
        
    ],
}