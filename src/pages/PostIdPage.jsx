import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import MyLoader from "../components/UI/loader/MyLoader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id);
        setPost(response.data);
    });

    const [fetchComments, isComLoading, errorComments] = useFetching(async () => {
        const response = await PostService.getPostCommentsById(params.id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById();
        fetchComments();
    }, []);

    return (
        <div>
            <h1>Вы открылись страницу поста c ID = {params.id}</h1>
            {isLoading
                ? <MyLoader/>
                : <div>{post?.id}. {post?.title}</div>
            }
            <h1>
                Комментарии
            </h1>
            {isLoading
                ? <MyLoader/>
                : <div>
                    {comments.map((comm) =>
                    <div style={{marginTop: 15}} key={comm.id}>
                        <h5>{comm.email}</h5>
                        <div>{comm.body}</div>
                    </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;