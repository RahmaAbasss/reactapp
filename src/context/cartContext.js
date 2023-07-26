import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../Utlis/baseUrl";

export let CartContext = createContext(0);

export default function CartContextProvider({ children }) {
  let headerss = { token: localStorage.getItem("token") };
  console.log(headerss);

  let [count, setCount] = useState(0);

  let [cartId,setCartId] = useState(null);


  function addToCart(token, productId) {
    return axios
      .post(
        `${baseUrl}/cart`,
        { productId },
        {
          headers: { token },
        }
      )
      .then((data) => data)
      .catch((error) => error);
  }

  function getUserCart(token) {
    return axios
      .get(`${baseUrl}/cart`, {
        headers: { token },
      })
      .then((data) => data)
      .catch((error) => error);
  }

  function removeCartItem(token, productId) {
    return axios
      .delete(`${baseUrl}/cart/${productId}`, {
        headers: { token },
      })
      .then((data) => data)
      .catch((error) => error);
  }

  function updateQty(token, productId, count) {
    return axios
      .put(
        `${baseUrl}/cart/${productId}`,
        { count },
        {
          headers: { token },
        }
      )
      .then((data) => data)
      .catch((error) => error);
  }


  

 async function getCartCount() {
    let token = localStorage.getItem("token");

  
    axios
      .get(`${baseUrl}/cart`, {
        headers: { token },
      })
      
       
      .then((data) => {
        setCount(data.data.numOfCartItems);
        
        setCartId(data.data._id);

        console.log(data.data.numOfCartItems);

        console.log(data.data._id);

      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getCartCount();
  }, []);

  //   orders/checkout-session/642e5663fc6ec80008fc40bf?url=http://localhost:420

  function generatOnlinePayment(cartId, shippingAddress) {
    return axios
      .post(
        `${baseUrl}/orders/checkout-session/${cartId}?url=http://localhost:3000`,
        { shippingAddress: shippingAddress },
        { headers: headerss }
      )
      .then((data) => data)
      .catch((error) => error);
  }
  

  return (
    <CartContext.Provider
      value={{
        addToCart,
        getCartCount,
        getUserCart,
        removeCartItem,
        updateQty,
        count,
        cartId,
        generatOnlinePayment,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
