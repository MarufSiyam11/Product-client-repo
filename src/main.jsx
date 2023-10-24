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
    path: "/updateProduct",
    element: <UpdateProduct></UpdateProduct>
  },
  {
    path: "/login",
    element: <Login></Login>
  }
]
},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
