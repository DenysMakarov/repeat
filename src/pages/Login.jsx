import React, {useContext, useState} from 'react';
import MyInp from "../components/UI/input/MyInp";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = e => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={login}>
                <MyInp type="text" placeholder="login"/>
                <MyInp type="text" placeholder="password"/>
                <MyButton>Enter</MyButton>
            </form>
        </div>
    );
};

export default Login;