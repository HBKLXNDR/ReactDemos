import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadUsers} from "../redux/actions";

const Users = () => {
    let users = useSelector(({usersState}) => usersState);
    const dispatch = useDispatch();

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => {
                loadUsers(value,dispatch)
            });
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