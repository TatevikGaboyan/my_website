import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Menu_1 from "./menu_1";

export default function Layout() {
    return (
        <div>
            <Menu_1 />
            <Outlet />
            {/* <div className="home"></div> */}
            <Footer />
        </div>

    )
}