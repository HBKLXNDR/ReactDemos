import React from 'react';
import {Button} from "../Button/Button";

const UserDetails = ({user}) => {
    const {id, name, username, email, phone, website, address: {street, suite, city, zipcode}} = user;
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <div>email:{email}</div>
            <div>phone:{phone}</div>
            <div>website:{website}</div>
            <div>street:{street}</div>
            <div>suite:{suite}</div>
            <div>city:{city}</div>
            <div>zipcode:{zipcode}</div>
            <Button to={"posts"}>get posts</Button>
            <hr/>
        </div>
    );
};

export {UserDetails};