import React from 'react';
import {Button} from "../Button/Button";

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div>
            <div>{id} - {title} <Button to={`${id}`} state={post}>Get details</Button></div>
        </div>
    );
};

export default Post;