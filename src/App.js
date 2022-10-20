import React, { Suspense, lazy, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CartProvider from "./store/ContextProvider/CartProvider/CartProvider";
import Donut from "./components/Ui/donut";
import "./App.css";

const Home = lazy(() => import("./components/Pages/Home/Home"));
const Browser = lazy(() => import("./components/Pages/Browser/Browser"));
const Category = lazy(() => import("./components/Pages/Category/Category"));
const ProductId = lazy(() => import("./components/Pages/ProductsId/ProductId"));
const Order = lazy(() => import("./components/Pages/Order/Order"));
const AuthForm = lazy(() => import("./components/Auth/AuthForm"));

function App() {
  const RouteComponents = [
    { path: "/", element: <Home /> },
    { path: "/browser", element: <Browser /> },
    { path: "/browser/:category", element: <Category /> },
    { path: "/product/:id", element: <ProductId /> },
    { path: "auth", element: <AuthForm /> },
    { path: "/orders", element: <Order /> }
  ]

  return (
    <Fragment>
      <Layout>
        <CartProvider>
          <Suspense fallback={<div><Donut /></div>}>
            <Routes>
              {RouteComponents.map((props) =>
                (<Route path={props.path} element={props.element}></Route>))}
            </Routes>
          </Suspense>
        </CartProvider>
      </Layout>
    </Fragment>
  );
}

export default App;
