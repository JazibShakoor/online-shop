import React, { useContext, useEffect } from "react";
import AuthContext from "../../../store/ContextProvider/AuthProvider/auth-context";
import OrderPage from "../../Container/OrderPage/OrderPage";
import classes from "./Order.module.css";
import useData from "../../../store/CustomHook/MainData/FetchDataHook";

const Order = () => {
  const authCtx = useContext(AuthContext);
  let idToken = authCtx.token;
  let { datas, fetchedValue } = useData(
    "https://carsdatabase-dfaec-default-rtdb.firebaseio.com/carsdata.json"
  );

  useEffect(() => {
    fetchedValue();
  }, [fetchedValue]);

  let fetchOrder = (
    <React.Fragment>
      {datas && datas.filter((y) => y.userId === idToken)}
    </React.Fragment>
  );

  if (!datas && authCtx.token) {
    fetchOrder = "Loading Data";
  }

  if (datas && fetchOrder.length > 0) {
    fetchOrder = <h2>No Record Found</h2>;
  }

  return (
    <div className={classes.shape}>
      {datas && fetchOrder.props
        ? fetchOrder.props.children.map((x) =>
            x.orderData.map((data) => (
              <OrderPage key={data.id} product={data} />
            ))
          )
        : fetchOrder}
    </div>
  );
};

export default Order;
