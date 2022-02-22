import React, {useState} from 'react';
import style from './CoinItem.module.scss';
import {ICoin, IUserCoin} from "../../../types";
import CustomButton from "../../UI/CustomButton";
import ModalBuySell from "./ModalBuySell";


interface CoinItemProps {
  coin: ICoin | IUserCoin;
  buttonName: string;
}

const CoinItem: React.FC<CoinItemProps> = ({coin, buttonName}) => {
  const [isActive, setActive] = useState(false)

  return (
    <>
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
              <CustomButton size={"16px"} onClick={() => setActive(true)}>{buttonName}</CustomButton>
            </div>
          </div>
        </div>
      </div>
      <ModalBuySell isActive={isActive} setActive={setActive} coin={coin} buttonName={buttonName} />
    </>
  );
};

export default CoinItem;