import React, {useState} from 'react';

import {SingleUser, Users} from "./Components";

const App = () => {
    const [singleUser, setSingleUser] = useState(null);
    const getUser = (user) => {
      setSingleUser(user)
    }
    return (
        <div>
        <div>
           {singleUser && <SingleUser user={singleUser}/>}
        </div>
        <div>
            <Users getUser={setSingleUser}/>
        </div>
            </div>
    );
};

export default App;


// <Form2/>
// <Form1/>
// import css from "./App.module.css"

