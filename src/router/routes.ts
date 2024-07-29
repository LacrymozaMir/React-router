import Login from "../components/Login";
import Error from "../pages/Error";
import Home from "../pages/Home";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
    {path: '/', component: Home},
    {path: '/posts', component: Posts},
    {path: '/posts/:id', component: PostIdPage},
    {path: '/404', component: Error},
    {path: '*', component: Error},
];

export const publicRoutes = [
    {path: '/login', component: Login},
    {path: '*', component: Login},
];