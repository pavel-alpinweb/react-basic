import React, {useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/UI/form/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'язык программирования'},
        {id: 2, title: 'Java', body: 'язык программирования'},
        {id: 3, title: 'Blueprint', body: 'язык программирования'},
        {id: 4, title: 'Wordpress', body: 'а это cms'},
        {id: 5, title: 'Node.js', body: 'платформа'},
    ]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);

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
        setModal(false);
    };

    const deletePost = (postId) => {
        setPosts(posts.filter((post) => post.id !== postId));
    };

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
