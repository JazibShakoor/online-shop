import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useData from "../../store/CustomHook/MainData/FetchDataHook";
import Modal from "../Ui/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import BasicForm from "./Checkoutdemo";
import usePostApi1 from "../../store/CustomHook/FetchApi/FetchApi1";

const Cart = (props) => {
  const { datas, fetchedValue } = useData(
    "https://carsdatabase-dfaec-default-rtdb.firebaseio.com/cars.json"
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [show, setShow] = useState(false);
  let { id } = useParams();
  const { actionPost } = usePostApi1();
  let searchProductId;

  useEffect(() => {
    fetchedValue();
  }, [fetchedValue]);

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    actionPost(userData);
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
