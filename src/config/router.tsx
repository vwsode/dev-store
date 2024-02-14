import {createBrowserRouter} from "react-router-dom";

import Layout from "../components/Layout/Layout.tsx";

import CatalogPage from "../pages/CatalogPage/CatalogPage.tsx";
import ProductPage from "../pages/ProductPage/ProductPage.tsx";
import HomePage from "../pages/HomePage/HomePage.tsx";
import CartPage from "../pages/CartPage/CartPage.tsx";
import FavoritePage from "../pages/FavoritePage/FavoritePage.tsx";

import {ROUTES} from "./routes.ts";
import LoginPage from "../pages/LoginPage/LoginPage.tsx";
import RegisterPage from "../pages/RegisterPage/RegisterPage.tsx";

export const router = createBrowserRouter([
    {
        path: ROUTES.MAIN,
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                element: <LoginPage/>,
                path: ROUTES.LOGIN,
            },
            {
                element: <RegisterPage/>,
                path: ROUTES.REGISTER,
            },
            {
                path: ROUTES.CART,
                element: <CartPage/>
            },
            {
                path: ROUTES.FAVORITES,
                element: <FavoritePage/>
            },
            {
                path: ROUTES.CATALOG,
                children: [
                    {
                        index: true,
                        element: <CatalogPage/>
                    },
                    {
                        path: ROUTES.PRODUCT,
                        element: <ProductPage/>,
                    }
                ]
            }
        ]
    }
]);