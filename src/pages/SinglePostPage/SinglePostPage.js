import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {postService} from "../../services";
import {PostDetails} from "../../components";

const SinglePostPage = () => {
    const {state} = useLocation();
    const [post, setPost] = useState(state);
    const {id} = useParams();
    useEffect(() => {
        if (!state) {
            postService.getByID(id).then(({data}) => setPost(data))
        } else {
            setPost(state)
        }
    }, [id, state])
    return (
        <div>
            {post && <PostDetails post={post}/>}
        </div>
    );
};

export {SinglePostPage};