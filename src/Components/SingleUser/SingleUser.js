import React from 'react';

const SingleUser = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <div className={"w200"}>
            {id} -- {name} -- {username} -- {email}
        </div>
    );
};

export {SingleUser};