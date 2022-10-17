import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "../../Ui/Card";
import classes from "../CssStyle/CategoryPage.module.css";

const CategoryPage = (props) => {
  return (
    <Fragment>
      <div className={classes.shape1}>
        <Link
          to={`/product/${props.product.id}`}>
          <Card>
            <div className={classes.inside}>
              <img src={props.product.image} alt="" />
              <h2>{props.product.name}</h2>
            </div>
          </Card>
        </Link>
      </div>
    </Fragment>
  );
};

export default CategoryPage;
