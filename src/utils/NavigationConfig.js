
import React from "react";
import { Home, Notifications, Sms, Phone, DriveEta } from "@material-ui/icons";

export const NavigationList = [
    {
        label: "0790180000",
        icon: <Phone color="primary" />,
        link: "#",
        button: false,
        color: "blue"
    },
    {
        label: "Home",
        icon: <Home />,
        link: "",
        button: true,
        color: "dark"
    },
    {
        label: "Notification",
        icon: <Notifications />,
        link: "",
        button: true,
        color: "dark"
    },
    {
        label: "My chats",
        icon: <Sms />,
        link: "",
        button: true,
        color: "dark"
    },
]

export const Categories = [
    {
        label: "Cars and Bikes",
        icon: <DriveEta />,
        children: [
            {
                label: "Cars For Sale"
            },
            {
                label: "Cars on Installment"
            },
            {
                label: "CarFax Report"
            },
            {
                label: "Car Rental"
            },
            {
                label: "Motorcycle"
            },
            {
                label: "Care Plates Number"
            },
        ]
    },
    {
        label: "Video Games and Consoles",
        icon: <DriveEta />,
        children: [
            {
                label: "Children Item"
            },
        ]
    },
    {
        label: "Books - Sports - Stationary",
        icon: <DriveEta />,
        children: [
            {
                label: "Children Item"
            },
        ]
    },
    {
        label: "Business - Equipments",
        icon: <DriveEta />,
        children: [
            {
                label: "Children Item"
            },
        ]
    },
    {
        label: "Electronics - Appliances",
        icon: <DriveEta />,
        children: [
            {
                label: "Children Item"
            },
        ]
    },
    {
        label: "Women's Fashion",
        icon: <DriveEta />,
        children: [
            {
                label: "Children Item"
            },
        ]
    },
    {
        label: "Real Estate for Rent",
        icon: <DriveEta />,
        children: [
            {
                label: "Children Item"
            },
        ]
    },
]