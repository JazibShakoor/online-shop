import React, { Fragment } from "react";
import Card from "../../Ui/Card";
import classes from "../CssStyle/CategoryPage.module.css";

const OrderPage = (props) => {
  return (
    <Fragment>
      <div className={classes.shape1}>
        <Card>
          <div className={classes.inside}>
            <h2>{`Name: ${props.product.name}`}</h2>
            <h3>{`Quantity: ${props.product.quantity}`}</h3>
            <h3>{`Price: ${props.product.price}`}</h3>
          </div>
        </Card>
      </div>
    </Fragment>
  );
};

export default OrderPage;
