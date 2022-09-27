import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "../../Ui/Card";
import classes from "../CssStyle/BrowserPage.module.css";

const BrowserPage = (props) => {
  return (
    <Fragment>
      <li className={classes.container}>
        <Link
          to={`/browser/${props.product.name}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card>
            <div className={classes.Img}>
              <img src={props.product.image} alt={props.product.name} />
            </div>
            <div>
              <h2>{props.product.name}</h2>
            </div>
          </Card>
        </Link>
      </li>
    </Fragment>
  );
};

export default BrowserPage;
