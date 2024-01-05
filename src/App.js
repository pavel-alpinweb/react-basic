import React, {useRef, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'JavaScript - язык программирования'},
        {id: 2, title: 'Java', body: 'Java - язык программирования'},
        {id: 3, title: 'Blueprint', body: 'Blueprint - язык программирования'},
    ]);

    const inputRef = useRef();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const addNewPost = (e) => {
        e.preventDefault();
    };

    return (
        <div className="App">
            <form>
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder="Название поста"
                />
                <MyInput
                    ref={inputRef}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    type="text"
                    placeholder="Описание поста"
                />
                <MyButton onClick={addNewPost} disabled>Создать пост</MyButton>
            </form>
            <PostList posts={posts} title={'Список постов'}/>
        </div>
    );
}

export default App;
