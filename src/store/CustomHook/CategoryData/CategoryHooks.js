import { useState, useEffect, useCallback } from "react";

//to tell react that we are making custome-hook
const useCategory = () => {
  const [category, setCategory] = useState();

  const fetchedAll = useCallback(async () => {
    try {
      const response = await fetch(
        "https://carsdatabase-dfaec-default-rtdb.firebaseio.com/category.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      for (const key in data) {
        setCategory(data[key]);
      }
    } catch (err) {
      throw new Error(err.message);
    }
  }, []);

  useEffect(() => {
    fetchedAll();
  }, [fetchedAll]);

  return category;
};

export default useCategory;
