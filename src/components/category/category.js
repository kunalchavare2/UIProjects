import useCategory from "../../hooks/useCategory";
import loadingStatus from "../../utils/loadingStatus";
import CategoryItem from "./categoryItem";
import Styles from "./category.module.css";
import { useEffect } from "react";

const Category = () => {
  const { categoryList, setCategoryList, loadingState } = useCategory();

  useEffect(()=>{

  });

  const clickHandler = (ev) => {
    console.log(ev.target.classList);
    if (
      ev.target.classList.length !== 0 &&
      ev.target.classList[0].includes("categoryItem")
    ) {
      ev.target.classList.add("selected");
    }
    
  };

  if (loadingState !== loadingStatus.loaded) {
    return <div>{loadingState}</div>;
  }

  const list = categoryList["categories"];

  return (
    <div className={Styles.categoryContainer}>
      <div className={Styles.header}>
        <h2 className={Styles.title}>Categories</h2>
        <button className={Styles.expandBtn}>See all</button>
      </div>
      <ul className={Styles.categoryList} onClick={clickHandler}>
        {list.map((category) => {
          return <CategoryItem key={category.idCategory} category={category} />;
        })}
      </ul>
    </div>
  );
};

export default Category;
