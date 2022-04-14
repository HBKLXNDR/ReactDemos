import React from 'react';

const UserDetails = ({userDetails, getUserId}) => {
    const {id,name,username,email} = userDetails;
    return (
        <div>
            <h3>id:{id}</h3>
            <h3>name:{name}</h3>
            <h3>username:{username}</h3>
            <h3>email:{email}</h3>
            <button onClick={()=>getUserId(id)}>get posts</button>
        </div>
    );
};

export {UserDetails};