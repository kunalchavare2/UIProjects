import Styles from "./category.module.css";
import "./category.module.css";
import classNames from "classnames";

const CategoryItem = ({ category }) => {
  var classValue = classNames({
    categoryItem: true,
    selected: true,
  });
  return (
    <li className="categoryItem selected">
      <div className={Styles.categoryImg}>
        <img src={category.strCategoryThumb} alt={category.strCategory} />
      </div>
      <span>{category.strCategory}</span>
    </li>
  );
};

export default CategoryItem;
