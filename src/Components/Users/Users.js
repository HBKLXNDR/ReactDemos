import React, {useEffect, useState} from 'react';

import {userService} from "../../services";
import {User} from "../User/User";

const Users = ({getUser}) => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);


    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))}, [])

    const getUserId = async (id) => {
        const {data} = await userService.getById(id);
        // console.log(data);
        setUser(data)
    }

    return (
        <div>
            <div>
                {users.map(user => <User key={user.id} user={user} getUserId={getUserId} getUser={getUser} />)}
            </div>
            {user && <div>{user.name} -- {user.username} </div>}
        </div>
    );
};

export {Users};