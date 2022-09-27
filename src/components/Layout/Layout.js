import React, { Fragment } from "react";
import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      {props.children}
    </Fragment>
  );
}

export default Layout;
