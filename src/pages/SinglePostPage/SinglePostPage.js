import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../../services";
import {PostDetails} from "../../components";

const SinglePostPage = () => {
    const [post, setPost] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        postService.getByID(id).then(({data})=>setPost(data))
    },[id])
    return (
        <div>
            {post && <PostDetails post={post}/>}
        </div>
    );
};

export {SinglePostPage};