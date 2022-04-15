import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import {User} from "../../components";

const UsersPage = () => {

    const [users, setUsers] = useState(null);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])

    return (
        <div>
            {
                users
                    ? users.map((user) => <User key={user.id} user={user}/>)
                    : "Loading..."
            }
        </div>
    );
};

export {UsersPage};