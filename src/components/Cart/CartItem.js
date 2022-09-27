import { useEffect, useState, useContext, Fragment } from "react";
import classes from "./CartItem.module.css";
import CartContext from "../../store/ContextProvider/CartProvider/cart-context";

let qty = 1;
const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  const [value, setValue] = useState(+props.product.price);
  const [stock, setStock] = useState(qty);
  const [show, setShow] = useState(true);

  const addHandler = () => {
    setStock((qty += 1));
    let totalAmount = +props.product.price;
    totalAmount *= qty;
    setValue(totalAmount);
  };

  const subtractHandler = () => {
    if (stock > 1 && value > +props.product.price) {
      setValue(value - +props.product.price);
      setStock((qty = stock - 1));
    }
  };

  useEffect(() => {
    setStock((qty = 1));
  }, []);

  const cartItemAddHandler = () => {
    const item = {
      id: props.product.id,
      name: props.product.name,
      quantity: stock,
      price: value,
    };
    cartCtx.items.push(item);
    setShow(false);
  };

  return (
    <Fragment>
      <li className={classes["cart-item"]}>
        <div>
          <h2>{props.product.name}</h2>
          <div className={classes.summary}>
            <span className={classes.price}>Quantity:</span>
            <span className={classes.amount}>{stock}</span>
          </div>
          <h2>Total Price: {value}</h2>
        </div>
        <div className={classes.actions}>
          <button onClick={subtractHandler}>-</button>
          <button onClick={addHandler}>+</button>
        </div>
      </li>
      {show && <button onClick={cartItemAddHandler}>save</button>}
    </Fragment>
  );
};

export default CartItem;
