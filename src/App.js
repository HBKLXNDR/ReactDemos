import React from 'react';

import {Route,Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {AboutPage, HomePage, PostsPage, UsersPage} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={"/"} element={<MainLayout/>}>
                <Route path={"/home"} element={<HomePage/>}/>
                <Route path={"/users"} element={<UsersPage/>}/>
                <Route path={"/posts"} element={<PostsPage/>}/>
                <Route path={"/about"} element={<AboutPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;