// import { useState, useEffect, useCallback } from "react";

// const useSearchOrder = () => {
//   const [order, setOrder] = useState([]);

//   const fetchedOrderData = useCallback(async () => {
//     try {
//       const response = await fetch(
//         "https://carsdatabase-dfaec-default-rtdb.firebaseio.com/carsdata.json"
//       );
//       if (!response.ok) {
//         throw new Error("Something went wrong!");
//       }

//       const data = await response.json();
//       const OrderData = [];

//       for (const key in data) {
//         OrderData.push({
//           id: key,
//           orderData: data[key].orderData,
//           userId: data[key].userId,
//         });
//       }

//       setOrder(OrderData);
//     } catch (err) {
//       throw new Error(err.message);
//     }
//   }, []);

//   useEffect(() => {
//     fetchedOrderData();
//   }, [fetchedOrderData]);

//   return order;
// };

// export default useSearchOrder;
