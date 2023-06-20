import useCategory from "../../hooks/useCategory";
import loadingStatus from "../../utils/loadingStatus";

const Category = () => {
  const { categoryList, setCategoryList, loadingState } = useCategory();

  console.log(categoryList["categories"]);
  const list = categoryList["categories"];
  console.log(list);

  if (loadingState !== loadingStatus.loaded) {
    return <div>{loadingState}</div>;
  }

  return (
    <ul>
      {list.map((category) => {
        return <li>{category["strCategory"]}</li>;
      })}
    </ul>
  );
};

export default Category;
