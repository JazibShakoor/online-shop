import React, { useContext } from "react";
import AuthContext from "../../../store/ContextProvider/AuthProvider/auth-context";
import OrderPage from "../../Container/OrderPage/OrderPage";
import classes from "./Order.module.css";
import useData from "../../../store/CustomHook/MainData/FetchDataHook";

const Order = () => {
  const authCtx = useContext(AuthContext);
  let idToken = authCtx.token;
  let datas = useData(
    "https://carsdatabase-dfaec-default-rtdb.firebaseio.com/carsdata.json"
  );

  let fetchOrder = (
    <React.Fragment>
      {datas && datas.filter((y) => y.userId === idToken)}
    </React.Fragment>
  );

  if (!datas && authCtx.token) {
    fetchOrder = "Loading Data";
  }

  // if (!datas && authCtx.token) {
  //   orderProduct = "Loading Data";
  // } else {
  //   let idToken = authCtx.token;
  //   let fetchOrder = datas.filter((y) => y.userId === idToken);
  //   orderProduct = fetchOrder.map((x) =>
  //     x.orderData.map((data) => <OrderPage key={data.id} product={data} />)
  //   );
  // }

  // if (datas && orderProduct.length === 0) {
  //   orderProduct = <h2>No Record Found</h2>;
  // }

  if (datas && !fetchOrder.props.children) {
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
