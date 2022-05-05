import React, {useRef} from 'react';
import {useDispatch} from "react-redux";

import {userActions} from "../redux/slices/user.slice";

const Form = () => {
    const nameInput = useRef();
    const dispatch = useDispatch();

    const addUser =()=>{
        dispatch(userActions.add({name: nameInput.current.value}))
    }
    return (
        <div>
            <input type="text" ref={nameInput}/>
            <button onClick={addUser}>Add</button>
        </div>
    );
};

export {Form};