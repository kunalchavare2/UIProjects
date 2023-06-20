import Styles from "./head.module.css";

const Search = () => {
  return (
    <div className={Styles.searchContainer}>
      <span className={Styles.searchIcon}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </span>
      <input type="search" placeholder="Search any recipes" />
      <span className={Styles.filters}>
        <i className="fa-solid fa-filter"></i>
      </span>
    </div>
  );
};

export default Search;
