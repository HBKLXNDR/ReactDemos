import React from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../redux/slices/user.slice";

const User = ({user: {id, name}}) => {
    const dispatch = useDispatch()
    return (
        <div>
            {id} -- {name}
            <button onClick={()=> dispatch(userActions.deleteById({id}))}>Del</button>

        </div>
    );
};

export {User};