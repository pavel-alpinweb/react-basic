import React from 'react';
import MyButton from "./UI/button/MyButton";

const Post = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong className="post__title">
                    #{props.number} {props.post.title}
                </strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => props.remove(props.post.id)} className="post__delete">Удалить</MyButton>
            </div>
        </div>
    );
};

export default Post;