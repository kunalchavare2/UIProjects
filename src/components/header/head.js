import React from "react";
import Styles from "./head.module.css";
import Logo from "../../logo.svg";
import Search from "./search";


const Head = () => {


  return (
    <header className={Styles.mainHeader}>
      <div className={Styles.wrapper}>
        <div className={Styles.content}>
          <span className={Styles.userName}>Hello,Anne</span>
          <span className={Styles.question}>
            What would you like to cook today?
          </span>
        </div>
        <div className={Styles.avatar}>
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <Search />
    </header>
  );
};

export default Head;
