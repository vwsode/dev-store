import { createBrowserRouter } from 'react-router-dom';

import Layout from '@/components/Layout/Layout.tsx';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute.tsx';

import Catalog from '../pages/Catalog/Catalog.tsx';
import Product from '../pages/Product/Product.tsx';
import Home from '../pages/Home/Home.tsx';
import Cart from '../pages/Cart/Cart.tsx';
import Favorite from '../pages/Favorite/Favorite.tsx';
import Login from '../pages/Login/Login.tsx';
import Register from '../pages/Register/Register.tsx';
import Profile from '../pages/Profile.tsx';

import { ROUTES } from './routes.ts';

export const router = createBrowserRouter([
    {
        path: ROUTES.MAIN,
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                element: <Login />,
                path: ROUTES.LOGIN,
            },
            {
                element: <Register />,
                path: ROUTES.REGISTER,
            },
            {
                path: ROUTES.CART,
                element: <Cart />,
            },
            {
                path: ROUTES.FAVORITES,
                element: <Favorite />,
            },
            {
                path: ROUTES.PROFILE,
                element: <ProtectedRoute element={<Profile />} />,
            },
            {
                path: ROUTES.CATALOG,
                children: [
                    {
                        index: true,
                        element: <Catalog />,
                    },
                    {
                        path: ROUTES.PRODUCT,
                        element: <Product />,
                    },
                ],
            },
        ],
    },
]);
