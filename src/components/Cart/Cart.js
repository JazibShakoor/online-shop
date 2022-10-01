import React, { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useData from "../../store/CustomHook/MainData/FetchDataHook";
import Modal from "../Ui/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import BasicForm from "./Checkoutdemo";
import CartContext from "../../store/ContextProvider/CartProvider/cart-context";
import AuthContext from "../../store/ContextProvider/AuthProvider/auth-context";

const Cart = (props) => {
  const { datas, fetchedValue } = useData(
    "https://carsdatabase-dfaec-default-rtdb.firebaseio.com/cars.json"
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [show, setShow] = useState(false);
  let { id } = useParams();
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  let searchProductId;

  useEffect(() => {
    fetchedValue();
  }, [fetchedValue]);

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    const response = await fetch(
      "https://carsdatabase-dfaec-default-rtdb.firebaseio.com/carsdata.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderData: cartCtx.items,
          userId: authCtx.token,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    await response.json();
  };

  const formHandler = () => {
    setShow(true);
  };

  if (!datas) {
    searchProductId = "Loading!";
  } else {
    let filterProductId = datas.filter((data) => data.id === id);
    searchProductId = filterProductId.map((data) => (
      <CartItem key={data.id} product={data} />
    ));
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      <Fragment>{searchProductId}</Fragment>
    </ul>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      {!show && <button onClick={formHandler}>Next</button>}
      {show && (
        <BasicForm onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
    </React.Fragment>
  );

  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && cartModalContent}
      {isSubmitting && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
