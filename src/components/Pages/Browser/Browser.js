import React, { Fragment } from "react";
import BrowserPage from "../../Container/BrowserPage/BrowserPage";
import classes from "./Browser.module.css";
import useCategory from "../../../store/CustomHook/CategoryData/CategoryHooks";

const Browser = () => {
  const category = useCategory();

  let browseData = (
    <React.Fragment>
      {category &&
        category.map((data) => <BrowserPage key={data.id} product={data} />)}
    </React.Fragment>
  );

  if (!category) {
    browseData = "Data Loading!";
  }

  return (
    <Fragment>
      <div className={classes.box}>
        <h1>Catagory</h1>
        <ul className={classes.center}>{browseData}</ul>
      </div>
    </Fragment>
  );
};

export default Browser;
