import React from 'react';

const Post = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <div>
            UserId : {userId} , Id : {id} , <br/> Title: {title} <br/> Text: {body} <br/> <br/>
        </div>
    );
};

export default Post;