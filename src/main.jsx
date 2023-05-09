import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/Register';
import About from './pages/About';
import Posts from './pages/Posts/Posts';
import Contact from './pages/Contact';
import CreatePost from './pages/createPost';
import { UserContextProvider } from './UserContext';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:'/',
        element:<HomePage/>
      },
      {
        path:'/create',
        element:<CreatePost/>
      },
      {
        path:'/Home',
        element:<HomePage/>
      },
      {
        path:'/login',
        element:<LoginPage/>
      },
      {
        path:'/edit/:id',
        element:<EditPost/>
      },
      {
        path:'/register',
        element:<RegisterPage/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/blog',
        element:<Posts/>
      },
      {
        path:'/Contact-Us',
        element:<Contact/>
      },
      {
        path:'/post/:id',
        element:<PostPage/>
      }
     
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
    <RouterProvider router={router}/>

    </UserContextProvider>
  </React.StrictMode>,
)
