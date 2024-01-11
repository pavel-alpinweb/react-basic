import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (

        <div className="navbar">
            <div className="navbar__links">
                <Link to="/about">0 сайте</Link>
                <Link to="/">Блог</Link>
            </div>
        </div>
    );
};

export default Navbar;