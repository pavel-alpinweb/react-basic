import React, {useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/UI/form/PostForm";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'язык программирования'},
        {id: 2, title: 'Java', body: 'язык программирования'},
        {id: 3, title: 'Blueprint', body: 'язык программирования'},
        {id: 4, title: 'Wordpress', body: 'а это cms'},
        {id: 5, title: 'Node.js', body: 'платформа'},
    ]);
    const [filter, setFilter] = useState({sort: '', query: ''});

    const sortedPosts = useMemo(() => {
        if(filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [posts, filter.sort]);

    const sortedAndSearchPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query));
    }, [sortedPosts, filter.query]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    const deletePost = (postId) => {
        setPosts(posts.filter((post) => post.id !== postId));
    };

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {
                sortedAndSearchPosts.length !== 0
                ? <PostList remove={deletePost} posts={sortedAndSearchPosts} title={'Список постов'}/>
                : <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
            }
        </div>
    );
}

export default App;
