import React from 'react';
import style from "./HeaderCoins.module.scss";
import CustomButton from "../../UI/CustomButton";

const HeaderCoins: React.FC = () => {
  return (
    <div className={style.coins__header}>
      <div className={style.coins__title}>
        Market
      </div>
      <div className={style.coins__search}>
        <div className={style.coins__searchbtn}>
          <CustomButton size={"16px"}>Search</CustomButton>
        </div>
        <div className={style.coins__searcinput}>
          <input type="text" placeholder="Search..."/>
        </div>
      </div>
    </div>
  );
};

export default HeaderCoins;