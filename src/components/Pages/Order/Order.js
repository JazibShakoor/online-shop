import React, { useContext } from "react";
import useSearchOrder from "../../../store/CustomHook/OrderData/FetchOrderHook";
import AuthContext from "../../../store/ContextProvider/AuthProvider/auth-context";
import OrderPage from "../../Container/OrderPage/OrderPage";
import classes from "./Order.module.css";

const Order = () => {
  const authCtx = useContext(AuthContext);
  let order = useSearchOrder();
  let orderProduct;

  if (!order.length > 0 && authCtx.token) {
    orderProduct = "Loading Data";
  } else {
    let idToken = authCtx.token;
    let fetchOrder = order.filter((y) => y.userId === idToken);
    orderProduct = fetchOrder.map((x) =>
      x.orderData.map((data) => <OrderPage key={x.id} product={data} />)
    );
  }
  let fetchOrder = order.filter((y) => y.userId === authCtx.token);

  if (order && !(authCtx.token in fetchOrder)) {
    orderProduct = <h2>No Record Found</h2>;
  }

  return <div className={classes.shape}>{orderProduct}</div>;
};

export default Order;
