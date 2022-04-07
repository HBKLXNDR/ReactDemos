import React from 'react';

const User = ({user, getUserId, getUser}) => {
    const {id, name, username} = user;
    return (
        <div className={"w200"}>
            {id} -- {name} -- {username}
            <button onClick={() => {
                getUserId(id)
                getUser(user)
            }}>click</button>
        </div>
    );
};

export {User};