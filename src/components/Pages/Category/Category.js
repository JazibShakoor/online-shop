import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import CategoryPage from "../../Container/CategoryPage/CategoryPage";
import classes from "./Category.module.css";
import useData from "../../../store/CustomHook/MainData/FetchDataHook";

const Category = () => {
  let { category } = useParams();
  const data = useData(
    "https://carsdatabase-dfaec-default-rtdb.firebaseio.com/cars.json"
  );
  let searchId;

  if (!data) {
    searchId = "Loading Data!";
  } else {
    let filterData = data.filter((x) => x.catagory === category);
    searchId = filterData.map((x) => <CategoryPage key={x.id} product={x} />);
  }

  return (
    <div className={classes.shape}>
      <Fragment>{searchId}</Fragment>
    </div>
  );
};

export default Category;
