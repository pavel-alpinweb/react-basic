import React, {useRef, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/UI/form/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'JavaScript - язык программирования'},
        {id: 2, title: 'Java', body: 'Java - язык программирования'},
        {id: 3, title: 'Blueprint', body: 'Blueprint - язык программирования'},
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    const deletePost = (postId) => {
        setPosts(posts.filter((post) => post.id !== postId));
    };

    return (
        <div className="App">
            <PostForm create={createPost}/>
            {
                posts.length !== 0
                ? <PostList remove={deletePost} posts={posts} title={'Список постов'}/>
                : <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
            }
        </div>
    );
}

export default App;
