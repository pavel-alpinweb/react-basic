import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/UI/form/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'язык программирования'},
        {id: 2, title: 'Java', body: 'язык программирования'},
        {id: 3, title: 'Blueprint', body: 'язык программирования'},
        {id: 4, title: 'Wordpress', body: 'а это cms'},
        {id: 5, title: 'Node.js', body: 'платформа'},
    ]);
    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    function getSortedPosts() {
        if(selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        }
        return posts;
    }

    const sortedPosts = getSortedPosts();

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    const deletePost = (postId) => {
        setPosts(posts.filter((post) => post.id !== postId));
    };

    const sortPosts = (sort) => {
        setSelectedSort(sort);
    };

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <MyInput
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Поиск..."
            />
            <MySelect
                value={selectedSort}
                onChangeHandler={sortPosts}
                defaultValue="Сортировка"
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'},
                ]}
            />
            {
                posts.length !== 0
                ? <PostList remove={deletePost} posts={sortedPosts} title={'Список постов'}/>
                : <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
            }
        </div>
    );
}

export default App;
