import React, {useEffect, useState} from 'react';

import {Loading, User} from "../../components";
import css from "./UsersPage.module.css"
import {userService} from "../../services";
import {Outlet} from "react-router-dom";

const UsersPage = () => {

    const [users, setUsers] = useState(null);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])

    return (
        <div className={css.wrap}>
            <div className={css.users}>
                {
                    users
                        ? users.map((user) => <User key={user.id} user={user}/>)
                        : <Loading/>
                }
            </div>
            <Outlet/>
        </div>
    );
};

export {UsersPage};