import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import CategoryPage from "../../Container/CategoryPage/CategoryPage";
import classes from "./Category.module.css";
import useData from "../../../store/CustomHook/MainData/FetchDataHook";

const Category = () => {
  let { category } = useParams();
  const datas = useData(
    "https://carsdatabase-dfaec-default-rtdb.firebaseio.com/cars.json"
  );

  let filterData = (
    <React.Fragment>
      {datas && datas.filter((x) => x.catagory === category)}
    </React.Fragment>
  );

  if (!datas) {
    filterData = "Loading Data!";
  }

  return (
    <div className={classes.shape}>
      <Fragment>
        {datas && filterData.props
          ? filterData.props.children.map((x) => (
              <CategoryPage key={x.id} product={x} />
            ))
          : filterData}
      </Fragment>
    </div>
  );
};

export default Category;
