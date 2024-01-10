import React, {useEffect, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/UI/form/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {useSortedAndSearchPosts, useSortedPosts} from "./hooks/usePosts";
import axios from "axios";

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);

    const sortedPosts = useSortedPosts(posts, filter.sort);
    const sortedAndSearchPosts = useSortedAndSearchPosts(sortedPosts, filter.query);

    async function fetchPosts() {
        const response = await axios.get('https://jsonplaceholder.org/posts');
        setPosts(response.data);
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };
    const deletePost = (postId) => {
        setPosts(posts.filter((post) => post.id !== postId));
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="App">
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <hr style={{margin: '15px 0'}}/>
            <PostList remove={deletePost} posts={sortedAndSearchPosts} title={'Список постов'}/>
        </div>
    );
}

export default App;
