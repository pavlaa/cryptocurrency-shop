import React from 'react';
import style from './Coins.module.scss';
import CustomButton from "../../UI/CustomButton";
import HeaderCoins from "./HeaderCoins";

const Coins: React.FC = () => {
  return (
    <div className={style.coins}>
      <div className={`${style.coins__container} _container`}>
        <HeaderCoins />
        Coins Page
      </div>
    </div>
  );
};

export default Coins;