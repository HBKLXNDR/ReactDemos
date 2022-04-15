import React, {useEffect, useState} from 'react';
import {useLocation, useParams, Outlet} from "react-router-dom";
import {userService} from "../../services";
import {Loading, UserDetails} from "../../components";

const SingleUserPage = () => {
    const {state} = useLocation();
    const [user, setUser] = useState(state);
    const {userId} = useParams();
    useEffect(() => {
        if (!state) {
            userService.getByID(userId).then(({data}) => setUser(data))
        } else {
            setUser(state)
        }
    }, [userId, state])
    return (
        <div>
            <div>
                {
                    user ? <UserDetails user={user}/>
                         : <Loading/>}
            </div>
            <Outlet/>
        </div>
    );
};

export {SingleUserPage};