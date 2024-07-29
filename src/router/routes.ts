import Login from "../components/Login";
import Error from "../pages/Error";
import Home from "../pages/Home";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
    {path: '/', component: Home, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostIdPage, exact: true},
    {path: '/404', component: Error},
];

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
];