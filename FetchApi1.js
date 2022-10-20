import { useContext } from "react";
import CartContext from "../../ContextProvider/CartProvider/cart-context";
import AuthContext from "../../ContextProvider/AuthProvider/auth-context";

const usePostApi1 = () => {
    const cartCtx = useContext(CartContext);
    const authCtx = useContext(AuthContext);
    const actionPost = async(data) => {
        const response = await fetch(
            "https://carsdatabase-dfaec-default-rtdb.firebaseio.com/carsdata.json",
            {
              method: "POST",
              body: JSON.stringify({
                user: data,
                orderData: cartCtx.items,
                userId: authCtx.token,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
      
          await response.json();
    }
   return {actionPost}
};



export default usePostApi1;