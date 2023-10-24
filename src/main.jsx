import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddProduct from './components/AddProduct.jsx';
import UpdateProduct from './components/UpdateProduct.jsx';
import Login from './components/Login.jsx';
import Root from './Root.jsx';
import Register from './components/Register.jsx';

const router = createBrowserRouter([

  {
    path: '/',
    element: <Root />,
    children: [
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/product')
  },
  {
    path: "/addProduct",
    element: <AddProduct></AddProduct>
  },
  {
    path: "/updateProduct/:id",
    element: <UpdateProduct></UpdateProduct>,
    loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
  },
 
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/register",
    element: <Register></Register>
  }
]
},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
