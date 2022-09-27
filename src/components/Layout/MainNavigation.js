import { Fragment, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../store/ContextProvider/AuthProvider/auth-context";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const authCtx = useContext(AuthContext);
  const navigation = useNavigate();

  const logoutHandler = () => {
    authCtx.logout();
    navigation("/");
  };

  return (
    <Fragment>
      <header className={classes.body}>
        <nav className={classes.navbar}>
          <div className={classes.logo}>Transportation</div>

          <ul className={classes.navLinks}>
            <input type="checkbox" id="checkbox_toggle" />
            <label htmlFor="checkbox_toggle" className={classes.hamburger}>
              &#9776;
            </label>

            <div className={classes.menu}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/browser">Browser</Link>
              </li>
              {authCtx.isLoggedIn && (
                <li>
                  <Link to="/orders">Orders</Link>
                </li>
              )}
              {!authCtx.isLoggedIn && (
                <li>
                  <Link to="/auth">Login</Link>
                </li>
              )}
              {authCtx.isLoggedIn && (
                <li>
                  <button onClick={logoutHandler}>Logout</button>
                </li>
              )}
            </div>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}

export default MainNavigation;
