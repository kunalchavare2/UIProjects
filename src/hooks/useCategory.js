import { useEffect, useState } from "react";
import loadingStatus from "./../utils/loadingStatus";
import useGetCategory from "./useGetCategory";

const useCategory = () => {
  const [categoryList, setCategoryList] = useState([]);

  const { get, loadingState } = useGetCategory(
    "http://www.themealdb.com/api/json/v1/1/categories.php"
  );

  useEffect(() => {
    const fetchCategory = async () => {
      const result = await get();
      console.log(result);
      setCategoryList(result);
    };

    fetchCategory();
  }, [get]);

  return { categoryList, setCategoryList, loadingState };
};

export default useCategory;
