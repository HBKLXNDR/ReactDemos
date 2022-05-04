import React from 'react';

import {Routes, Route} from "react-router-dom";
import StartPage from "./components/StartPage/StartPage";
import {First, HZpage} from "./components";

const App = () => {
    return (
        <Routes>
            <Route path={"/"} element={<StartPage/>}>
            </Route>
            <Route path={"hz"} element={<HZpage/>}/>
            <Route path={"about/:id"} element={<First/>}/>
        </Routes>
    );
};

export default App;