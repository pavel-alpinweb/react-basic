import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";

export const privateRoutes = [
    {path: '/', component: Posts, exact: true},
    {path: '/error', component: Error, exact: true},
    {path: '/about', component: About, exact: true},
    {path: '/post/:id', component: PostIdPage, exact: true},
];

export const publicRoutes = [
    {path: '/login', component: Login, exact: true}
];