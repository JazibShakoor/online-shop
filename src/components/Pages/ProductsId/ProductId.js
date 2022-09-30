import React, { Fragment, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductIdPage from "../../Container/ProductIdPage/ProductIdPage";
import AuthContext from "../../../store/ContextProvider/AuthProvider/auth-context";
import Cart from "../../Cart/Cart";
import classes from "./ProductId.module.css";
import useData from "../../../store/CustomHook/MainData/FetchDataHook";

const ProductId = () => {
  let { id } = useParams();
  const data = useData(
    "https://carsdatabase-dfaec-default-rtdb.firebaseio.com/cars.json"
  );
  let productId;
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [cartItemShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    authCtx.isLoggedIn ? setCartIsShown(true) : navigate("/auth");
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  if (!data) {
    productId = "Loading Data!";
  } else {
    let searchProductId = data.filter((x) => x.id === id);

    productId = searchProductId.map((z) => (
      <ProductIdPage key={z.id} product={z} click={showCartHandler} />
    ));
  }

  return (
    <div className={classes.shape}>
      {cartItemShown && <Cart onClose={hideCartHandler} />}
      <Fragment>{productId}</Fragment>
    </div>
  );
};

export default ProductId;
