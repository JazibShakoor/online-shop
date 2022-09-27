import { useState, useEffect, useCallback } from "react";

//to tell react that we are making custome-hook
const useData = () => {
  const [datas, setDatas] = useState();

  const fetchedValue = useCallback(async () => {
    try {
      const response = await fetch(
        "https://carsdatabase-dfaec-default-rtdb.firebaseio.com/cars.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      for (const key in data) {
        setDatas(data[key]);
      }
    } catch (err) {
      throw new Error(err.message);
    }
  }, []);

  useEffect(() => {
    fetchedValue();
  }, [fetchedValue]);

  return datas;
};

export default useData;
