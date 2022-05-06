import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import {actionsDog} from "../redux";

const DogsForm = () => {
    const [name, setName] = useState("")
    const dispatch = useDispatch();

    const save = () => {
        dispatch(actionsDog.addDog({name}))
        setName("")
    }
    return (
        <div>
            <label>Dog name: <input type="text" onChange={(e) => setName(e.target.value)} value={name}/></label>
            <button onClick={save}>Save</button>
        </div>
    );
};

export {DogsForm};