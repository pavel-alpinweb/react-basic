import React, {useState} from "react";
import './styles/App.css'
import Post from "./components/Post";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'JavaScript - язык программирования'},
        {id: 2, title: 'Java', body: 'Java - язык программирования'},
        {id: 3, title: 'Blueprint', body: 'Blueprint - язык программирования'},
    ]);

    return (
        <div className="App">
            {posts.map((post) => <Post post={post}/>)}
        </div>
    );
}

export default App;
