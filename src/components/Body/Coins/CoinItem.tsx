import React from 'react';
import style from './CoinItem.module.scss';
import {ICoin} from "../../../types";
import CustomButton from "../../UI/CustomButton";


interface CoinItemProps {
  coin: ICoin;
  buttonName: string;
}

const CoinItem: React.FC<CoinItemProps> = ({coin, buttonName}) => {
  return (
    <div className={style.coin}>
      <div className={style.coin__body}>
        <div className={style.coin__block1}>
          <div className={style.coin__img}>
            <img src={coin.image} alt=""/>
          </div>
          <div className={style.coin__shortname}>
            {coin.shortName}
          </div>
          <div className={style.coin__name}>
            {coin.name}
          </div>
        </div>
        {
          coin.count &&
          <div className={style.coin__count}>
            Count: {coin.count}
          </div>
        }
        <div className={style.coin__block2}>
          <div className={style.coin__price}>
            $ {coin.price}
          </div>
          <div className={style.coin__btn}>
            <CustomButton size={"16px"}>{buttonName}</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinItem;