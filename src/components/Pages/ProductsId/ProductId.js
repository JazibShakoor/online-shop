import React, { Fragment, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductIdPage from "../../Container/ProductIdPage/ProductIdPage";
import AuthContext from "../../../store/ContextProvider/AuthProvider/auth-context";
import Cart from "../../Cart/Cart";
import classes from "./ProductId.module.css";
import useData from "../../../store/CustomHook/MainData/FetchDataHook";

const ProductId = () => {
  let { id } = useParams();
  const datas = useData(
    "https://carsdatabase-dfaec-default-rtdb.firebaseio.com/cars.json"
  );

  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [cartItemShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    authCtx.isLoggedIn ? setCartIsShown(true) : navigate("/auth");
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  let searchProductId = (
    <React.Fragment>{datas && datas.filter((x) => x.id === id)}</React.Fragment>
  );

  if (!datas) {
    searchProductId = "Loading Data!";
  }

  // else {
  //   let searchProductId = data.filter((x) => x.id === id);

  //   productId = searchProductId.map((z) => (
  //     <ProductIdPage key={z.id} product={z} click={showCartHandler} />
  //   ));
  // }

  return (
    <div className={classes.shape}>
      {cartItemShown && <Cart onClose={hideCartHandler} />}
      <Fragment>
        {datas && searchProductId.props
          ? searchProductId.props.children.map((z) => (
              <ProductIdPage key={z.id} product={z} click={showCartHandler} />
            ))
          : searchProductId}
      </Fragment>
    </div>
  );
};

export default ProductId;
