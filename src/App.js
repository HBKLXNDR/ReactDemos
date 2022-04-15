import React from 'react';

import {Route,Routes,Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {AboutPage, HomePage, NotFoundPage, PostsPage, SinglePostPage, UsersPage} from "./pages";
import {SingleUserPage} from "./pages/SingleUserPage/SingleUserPage";

const App = () => {
    return (
        <Routes>
            <Route path={"/"} element={<MainLayout/>}>
                <Route index element={<Navigate to={"home"}/>}/>
                <Route path={"home"} element={<HomePage/>}/>
                <Route path={"users"} element={<UsersPage/>}>
                    <Route path={":userId"} element={<SingleUserPage/>}/>
                </Route>
                <Route path={"posts"} element={<PostsPage/>}>
                    <Route path={":id"} element={<SinglePostPage/>}/>
                </Route>
                <Route path={"about"} element={<AboutPage/>}/>
                <Route path={"*"} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;