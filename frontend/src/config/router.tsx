import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/layout/Layout/Layout.tsx";

import Catalog from "../pages/Catalog/Catalog.tsx";
import Product from "../pages/Product/Product.tsx";
import Home from "../pages/Home/Home.tsx";
import Cart from "../pages/Cart/Cart.tsx";
import Favorite from "../pages/Favorite/Favorite.tsx";

import { ROUTES } from "./routes.ts";
import Login from "../pages/Login/Login.tsx";
import Register from "../pages/Register/Register.tsx";

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
