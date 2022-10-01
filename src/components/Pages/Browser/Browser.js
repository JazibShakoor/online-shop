import React, { Fragment, useEffect } from "react";
import BrowserPage from "../../Container/BrowserPage/BrowserPage";
import classes from "./Browser.module.css";
import useData from "../../../store/CustomHook/MainData/FetchDataHook";

const Browser = () => {
  const { datas, fetchedValue } = useData(
    "https://carsdatabase-dfaec-default-rtdb.firebaseio.com/category.json"
  );

  useEffect(() => {
    fetchedValue();
  }, [fetchedValue]);

  let browseData = (
    <React.Fragment>
      {datas &&
        datas.map((data) => <BrowserPage key={data.id} product={data} />)}
    </React.Fragment>
  );

  if (!datas) {
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
