import { useState } from "react";

//to tell react that we are making custome-hook
const useData = (url) => {
  const [datas, setDatas] = useState();

  const fetchedValue = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      for (const key in data) {
        if (data[key].userId) {
          const OrderData = [];
          OrderData.push({
            id: key,
            orderData: data[key].orderData,
            userId: data[key].userId,
          });
          setDatas(OrderData);
        } else {
          setDatas(data[key]);
        }
      }
    } catch (err) {
      throw new Error(err.message);
    }
  };

  fetchedValue();

  return datas;
};

export default useData;
