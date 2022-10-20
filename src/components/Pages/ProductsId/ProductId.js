import React, { Fragment, useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductIdPage from "../../Container/ProductIdPage/ProductIdPage";
import AuthContext from "../../../store/ContextProvider/AuthProvider/auth-context";
import Cart from "../../Cart/Cart";
import classes from "./ProductId.module.css";
import useData from "../../../store/CustomHook/MainData/FetchDataHook";
import Donut from "../../Ui/donut";

const ProductId = () => {
  let { id } = useParams();
  const { datas, fetchedValue } = useData(
    "https://carsdatabase-dfaec-default-rtdb.firebaseio.com/cars.json"
  );

  useEffect(() => {
    fetchedValue();
  }, [fetchedValue]);

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
    searchProductId = <Donut />;
  }

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
