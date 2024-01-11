import React, {useRef, useState} from 'react';
import MyInput from "../input/MyInput";
import MyButton from "../button/MyButton";

const PostForm = ({create}) => {
    const inputRef = useRef();
    const [post, setPost] = useState({
        title: '',
        body: '',
    });

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now(),
        };
        create(newPost);
        setPost({title: '', body: ''});
    };

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Название поста"
            />
            <MyInput
                ref={inputRef}
                value={post.content}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Описание поста"
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;