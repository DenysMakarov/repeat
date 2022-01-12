import {BrowserRouter} from "react-router-dom";
import './css/App.css';
import Navbar from "./components/UI/navBar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";
import {useEffect, useState} from "react";

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoadingAuth, setIsLoadingAuth] = useState(true);

    useEffect(()=>{
        if (localStorage.getItem('auth')){
            setIsAuth(true)
        }
        setIsLoadingAuth(false) // -> router начинает работать после того как узнает авторизованный пользователь или нет
    }, [])

    return (
        <AuthContext.Provider value={{
            // isTrue : isAuth -> // если бы названия не совпадали
            isAuth,
            setIsAuth,
            isLoadingAuth
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>

    )
}

export default App;
