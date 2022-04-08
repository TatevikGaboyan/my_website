import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Menu from "./menu";

export default function Layout() {
    return (
        <div>
            <Menu />
            <Outlet />
            <Footer />
        </div>

    )
}