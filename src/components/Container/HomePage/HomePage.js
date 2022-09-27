import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "../../Ui/Card";
import classes from "../CssStyle/HomePage.module.css";

const HomePage = (props) => {
  return (
    <Fragment>
      <li className={classes.container}>
        <Card>
          <div className={classes.Img}>
            <img src={props.product.image} alt={props.product.name} />
          </div>
          <div className={classes.position}>
            <h2>{props.product.name}</h2>
            <h3>{`Price: $${props.product.price}`}</h3>
            <Link to={`/product/${props.product.id}`}>
              <button>Buy Now</button>
            </Link>
          </div>
        </Card>
      </li>
    </Fragment>
  );
};

export default HomePage;
