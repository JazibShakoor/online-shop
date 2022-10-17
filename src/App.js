import React, { Suspense, lazy, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CartProvider from "./store/ContextProvider/CartProvider/CartProvider";
import "./App.css";

const Home = lazy(() => import("./components/Pages/Home/Home"));
const Browser = lazy(() => import("./components/Pages/Browser/Browser"));
const Category = lazy(() => import("./components/Pages/Category/Category"));
const ProductId = lazy(() => import("./components/Pages/ProductsId/ProductId"));
const Order = lazy(() => import("./components/Pages/Order/Order"));
const AuthForm = lazy(() => import("./components/Auth/AuthForm"));

function App() {
  return (
    <Fragment>
      <Layout>
        <CartProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/browser" element={<Browser />}></Route>
              <Route path="/browser/:category" element={<Category />}></Route>
              <Route path="/product/:id" element={<ProductId />}></Route>
              <Route path="auth" element={<AuthForm />}></Route>
              <Route path="/orders" element={<Order />}></Route>
            </Routes>
          </Suspense>
        </CartProvider>
      </Layout>
    </Fragment>
  );
}

export default App;
