import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useHistory} from "react-router-dom";

const Post = (props) => {
    const router = useHistory();

    return (
        <div className="post">
            <div className="post__content">
                <strong className="post__title">
                    #{props.post.id} {props.post.title}
                </strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => router.push(`/post/${props.post.id}`)} className="post__delete">Открыть</MyButton>
                <MyButton onClick={() => props.remove(props.post.id)} className="post__delete">Удалить</MyButton>
            </div>
        </div>
    );
};

export default Post;