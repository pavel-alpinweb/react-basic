import React, {useEffect, useRef, useState} from "react";
import '../styles/App.css'
import PostList from "../components/PostList";
import PostForm from "../components/UI/form/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import MyLoader from "../components/UI/loader/MyLoader";
import MyPagination from "../components/UI/pagination/MyPagination";
import {useSortedAndSearchPosts, useSortedPosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    });

    const sortedPosts = useSortedPosts(posts, filter.sort);
    const sortedAndSearchPosts = useSortedAndSearchPosts(sortedPosts, filter.query);
    const lastElement = useRef();

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };
    const deletePost = (postId) => {
        setPosts(posts.filter((post) => post.id !== postId));
    };

    useEffect(() => {
        fetchPosts();
    }, [page, limit]);

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    });

    return (
        <div className="App">
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <MySelect
                value={limit}
                onChangeHandler={value => setLimit(value)}
                defaultValue="Количетсво элементов на странице"
                options={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: 20, name: '20'},
                ]}
            ></MySelect>
            <hr style={{margin: '15px 0'}}/>
            {postError && <h1>Произошла ошибка ${postError}</h1>}
            <PostList remove={deletePost} posts={sortedAndSearchPosts} title={'Список постов'}/>
            <div ref={lastElement} style={{height: 20, background: 'teal'}}></div>
            {isPostsLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
                    <MyLoader />
                </div>
            }
            { totalPages === 0 ? '' :
                <MyPagination
                    totalPages={totalPages}
                    page={page}
                    setPage={setPage}
                />
            }
        </div>
    );
}

export default Posts;