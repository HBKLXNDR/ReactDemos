import React from 'react';
import {Link, Outlet, useNavigate} from "react-router-dom";

import css from "./MainLayout.module.css"
import {useAuth} from "../../hooks";

const MainLayout = () => {
    const navigate = useNavigate()
    const {user, logOut} = useAuth();

    return (
        <div>
            <div className={css.header}>
                <Link to="/home">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/about">About</Link>
                {user && <h1>{user}
                    <button onClick={()=>logOut(()=>navigate("/"))}>LogOut</button></h1>}
            </div>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};