import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadUsers} from "../redux/actions.creators";

const Users = () => {
    let users = useSelector(({usersState}) => usersState);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(loadUsers())
    },[])

    return (
        <div>
            {
                users.map(value=> <div key={value.id}>{value.name}</div>)
            }
        </div>
    );
};

export {Users};