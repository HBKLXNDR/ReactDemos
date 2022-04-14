import React from 'react';
import {Outlet} from "react-router-dom"

import css from "./MainLayout.module.css"

const MainLayout = () => {
    return (
        <div>
            <div className={css.header}>
                <a href="/home">Home</a>
                <a href="/users">Users</a>
                <a href="/posts">Posts</a>
                <a href="/about">About</a>
            </div>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};