import React, {useEffect, useState} from 'react';

import Post from "../../components/Post/Post";
import {postService} from "../../services";
import {Outlet, useParams, useSearchParams} from "react-router-dom"
// import {MyContext} from "../../index";

const PostsPage = () => {

    const [posts, setPosts] = useState([]);
    // const value = useContext(MyContext);
    const [query, setQuery] = useSearchParams({page: '1'});

    const {userId} = useParams();

    useEffect(() => {
        if (userId) {
            postService.getByUserID(userId).then(({data}) => setPosts(data))
        } else {
            postService.getAll(query.get('page'), 10).then(({data}) => setPosts(data))
            // console.log(value);
            // value.name = "Olga"
        }
    }, [userId, query])

    const nextPage = () => {
        // let page = query.get("page");
        // page = +page + 1
        // setQuery({page: page.toString()})

        const queryObject = Object.fromEntries(query.entries());
        queryObject.page++
        setQuery(queryObject)
    }
    return (
        <div style={{display: "flex"}}>
            <div>
                {posts.map(post => <Post key={post.id} post={post} flag={!userId}/>)}
                <button onClick={() => nextPage()}>Next_Page</button>
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export {PostsPage};