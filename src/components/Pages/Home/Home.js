import React, { Fragment, useEffect } from "react";
import classes from "./Home.module.css";
import SlideShow from "../../SlideShow/SlideShow";
import HomePage from "../../Container/HomePage/HomePage";
import useData from "../../../store/CustomHook/MainData/FetchDataHook";

const Home = () => {
  const { datas, fetchedValue } = useData(
    "https://carsdatabase-dfaec-default-rtdb.firebaseio.com/cars.json"
  );

  useEffect(() => {
    fetchedValue();
  }, [fetchedValue]);

  let displayData = (
    <React.Fragment>
      {datas && datas.map((data) => <HomePage key={data.id} product={data} />)}
    </React.Fragment>
  );

  if (!datas) {
    displayData = "Found No Data To Be Display";
  }

  return (
    <Fragment>
      <SlideShow />
      <div className={classes.box}>
        <h1>Featured Products</h1>
        <ul className={classes.holder}>{displayData}</ul>
      </div>
    </Fragment>
  );
};

export default Home;
