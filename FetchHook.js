import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../ContextProvider/AuthProvider/auth-context";

const usePostApi = () => {
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);
    const postApi = (url, email, password) => {
    
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
              returnSecureToken: true,
              idToken: authCtx.token
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => {
              if (res.ok) {
                return res.json();
              } else {
                return res.json().then((data) => {
                  let errorMessage = "Authentication failed!";
                  throw new Error(errorMessage);
                });
              }
            })
            .then((data) => {
             const expirationTime = new Date(
                new Date().getTime() + +data.expiresIn * 1000
            );
            authCtx.login(data.localId, expirationTime.toISOString())
            navigate('/');
            })
            .catch((err) => {
              alert(err.message);
            });    
};
return {postApi}
};

export default usePostApi;