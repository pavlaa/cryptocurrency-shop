import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import style from './ModalBuySell.module.scss'
import {useDispatch} from "react-redux";
import CustomButton from "../../UI/CustomButton";
import {ICoin} from "../../../types";


interface ModalBuySellProps {
  isActive: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  coin: ICoin;
  buttonName: string
}

const ModalBuySell: React.FC<ModalBuySellProps> = ({isActive, setActive, coin, buttonName}) => {
  const [buyCount, setBuyCount] = useState(1)

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible'
    }
  }, [isActive])

  function implementCount() {
    if (buyCount === coin.count) {

      setBuyCount(coin.count)
    } else {
      setBuyCount(buyCount + 1)
    }
  }
  function decrementCount() {
    if (buyCount > 1) {
      setBuyCount(buyCount - 1)
    }
  }

  return (
    <div className={isActive ? `${style.modal} ${style.active}` : style.modal} onClick={() => setActive(false)}>
      <div className={style.modal__body} onClick={(e) => e.stopPropagation()}>
        <div className={style.modal__block1}>
          <div className={style.modal__img}>
            <img src={coin.image} alt=""/>
          </div>
          <div className={style.modal__shortname}>
            {coin.shortName}
          </div>
        </div>
        <div className={style.modal__block2}>
          <div className={style.modal__minus}>
            <CustomButton size="20px" color="red" onClick={decrementCount}>-</CustomButton>
          </div>
          <div className={style.modal__count}>
            {buyCount}
          </div>
          <div className={style.modal__plus}>
            <CustomButton size="20px" color="green" onClick={implementCount}>+</CustomButton>
          </div>
        </div>
        <div className={style.modal__block3}>
          <div className={style.modal__price}>
            $ {coin.price}
          </div>
          <div className={style.modal__btn}>
            <CustomButton size="16px" onClick={() => setActive(true)}>{buttonName}</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBuySell;