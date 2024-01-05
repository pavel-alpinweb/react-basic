import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'JavaScript - язык программирования'},
        {id: 2, title: 'Java', body: 'Java - язык программирования'},
        {id: 3, title: 'Blueprint', body: 'Blueprint - язык программирования'},
    ]);
    return (
        <div className="App">
            <form>
                <input type="text" placeholder="Название поста"/>
                <input type="text" placeholder="Описание поста"/>
                <MyButton disabled>Создать пост</MyButton>
            </form>
            <PostList posts={posts} title={'Список постов'}/>
        </div>
    );
}

export default App;
