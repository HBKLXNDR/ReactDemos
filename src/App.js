import React from 'react';

import "./App.css"
import {Cats, CatsForm, Dogs, DogsForm} from "./components";

const App = () => {
    return (
        <div>
            <div className={"flex"}>
                <CatsForm/>
                <DogsForm/>
            </div>

            <hr/>

            <div className={"flex"}>
                <Cats/>
                <Dogs/>
            </div>
        </div>
    );
};

export default App;