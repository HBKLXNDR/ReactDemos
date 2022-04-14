import React, {useEffect, useState} from 'react';

import Post from "../../components/Post/Post";
import {postService} from "../../services";
import {Outlet} from "react-router-dom"

const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        postService.getAll().then(({data})=>setPosts(data))
    },[])

    return (
        <div style={{display: "flex"}}>
            <div>{posts.map(post=><Post key={post.id} post={post}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
};

export {PostsPage};