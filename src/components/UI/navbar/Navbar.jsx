import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    return (
        <div className="navbar">
            <div className="navbar__links">
                <Link to="/about">0 сайте</Link>
                <Link to="/">Блог</Link>
                {
                    isAuth
                        ?
                            <MyButton
                                onClick={() => setIsAuth(false)}
                            >Выйти</MyButton>
                        :
                            ''
                }

            </div>
        </div>
    );
};

export default Navbar;