import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";

export const routes = [
    {path: '/', component: Posts, exact: true},
    {path: '/error', component: Error, exact: true},
    {path: '/about', component: About, exact: true},
    {path: '/post/:id', component: PostIdPage, exact: true},
];