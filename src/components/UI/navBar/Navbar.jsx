import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const logOut = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className="navBar">
            <MyButton onClick={logOut}>LogOut</MyButton>
            <div className="navbar_items">
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
            </div>
        </div>
    );
};

export default Navbar;