import Card from "../../Ui/Card";
import classes from "../CssStyle/ProductId.module.css";

const ProductIdPage = (props) => {
  return (
    <div className={classes.shape1}>
      <Card>
        <div className={classes.inside}>
          <img src={props.product.image} alt={props.product.name} />
          <div className={classes.shape}>
            <h1>{props.product.name}</h1>
            <h2>${props.product.price}</h2>
            <button onClick={props.click}>Order Now</button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductIdPage;
