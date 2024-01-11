import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import MyLoader from "../components/UI/loader/MyLoader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState(null);
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id);
        setPost(response.data);
    });

    useEffect(() => {
        fetchPostById();
    }, []);

    return (
        <div>
            <h1>Вы открылись страницу поста c ID = {params.id}</h1>
            {isLoading
                ? <MyLoader/>
                : <div>{post?.id}. {post?.title}</div>
            }
        </div>
    );
};

export default PostIdPage;