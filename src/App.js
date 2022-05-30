import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CarPage, LoginPage, RegisterPage} from "./pages";
import {RequireAuth} from "./hoc";
import {useDispatch} from "react-redux";
import {authActions} from "./redux";

const App = () => {
    const dispatch = useDispatch();
    const access = localStorage.getItem("access");

    if (access){
        dispatch(authActions.setAuth())
    }

    return (
        <Routes>
            <Route path={"/"} element={<MainLayout/>}>
                <Route index element={<Navigate to={"cars"}/>}/>
                <Route path={"cars"} element={<RequireAuth><CarPage/></RequireAuth>}/>
                <Route path={"login"} element={<LoginPage/>}/>
                <Route path={"register"} element={<RegisterPage/>}/>

            </Route>
        </Routes>
    );
};

export default App;