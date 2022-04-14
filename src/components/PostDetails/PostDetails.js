import React from 'react';

const PostDetails = ({post}) => {
    const {id, postId, title, body} = post;
    return (
        <div>
            <div>id:{id}</div>
            <div>postId:{postId}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
        </div>
    );
};

export {PostDetails};