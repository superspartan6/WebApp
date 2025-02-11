import React, { useEffect } from "react";
import MainNav from "../pages/MainNav";
import MainFooter from "../pages/MainFooter";

const MainLayout = ({ children, title }) => {
    useEffect(() => {
        if (title) {
            document.title = title;
        }
    }, [title]);
    
    return (
        <div className="app-wrapper">
            <MainNav />
            <div className="content">
                <div className="container">
                    {children}
                </div>
            </div>
            <MainFooter />
        </div>
    );
};

export default MainLayout;
