import React, { Fragment } from "react";
import classes from "./Home.module.css";
import SlideShow from "../../SlideShow/SlideShow";
import HomePage from "../../Container/HomePage/HomePage";
import useData from "../../../store/CustomHook/MainData/FetchDataHook";

const Home = () => {
  const data = useData();

  let displayData = (
    <React.Fragment>
      {data && data.map((data) => <HomePage key={data.id} product={data} />)}
    </React.Fragment>
  );

  if (!data) {
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
