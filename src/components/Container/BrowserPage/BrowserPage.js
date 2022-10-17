import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "../../Ui/Card";
import classes from "../CssStyle/BrowserPage.module.css";

const BrowserPage = (props) => {
  return (
    <Fragment>
      <Link
          to={`/browser/${props.product.name}`}>
          <li className={classes.container}>
          <Card>
            <div className={classes.Img}>
              <img src={props.product.image} alt={props.product.name} />
            </div>
            <div className={classes.fontColor}>
              <h2>{props.product.name}</h2>
            </div>
          </Card>
      </li>
      </Link>
    </Fragment>
  );
};

export default BrowserPage;
