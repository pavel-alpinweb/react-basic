import React from 'react';

const Post = (props) => {
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
                <button className="post__delete">Удалить</button>
            </div>
        </div>
    );
};

export default Post;