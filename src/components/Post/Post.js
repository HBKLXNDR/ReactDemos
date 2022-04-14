import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div>
            <div>{id} - {title} <Link to={`${id}`}>Get details</Link></div>
        </div>
    );
};

export default Post;