import React from 'react';

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    return (
        <div>
            PostID :{postId} , Id: {id} <br/> Name - {name} <br/> Email - {email} <br/> text: {body} <br/><br/>
        </div>
    );
};

export default Comment;