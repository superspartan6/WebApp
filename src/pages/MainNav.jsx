import React from "react";
import { Link } from "react-router-dom";

const MainNav = () => {
    return (
        <nav>
            <h1>My Website</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
};

export default MainNav;
