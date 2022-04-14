import React from 'react';
import {Link, Outlet} from "react-router-dom";

import css from "./MainLayout.module.css"

const MainLayout = () => {
    return (
        <div>
            <div className={css.header}>
                <Link to="/home">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/about">About</Link>
            </div>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};