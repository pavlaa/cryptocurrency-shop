import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import style from './ModalBuySell.module.scss'
import {useDispatch} from "react-redux";
import CustomButton from "../../UI/CustomButton";
import {ICoin, IUserCoin} from "../../../types";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {buySellCoin} from "../../../store/actions/coinsAction";


interface ModalBuySellProps {
  isActive: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  coin: ICoin | IUserCoin;
  buttonName: string
}

const ModalBuySell: React.FC<ModalBuySellProps> = ({isActive, setActive, coin, buttonName}) => {
  const {profile} = useTypedSelector((state) => state.auth);
  const {userCoins} = useTypedSelector((state) => state.coins);
  const [buyCount, setBuyCount] = useState(1);
  const dispatch = useDispatch();

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

  const buyCoins = () => {
    if (profile?.balance && userCoins) {
      const newBalance = +(profile?.balance - (buyCount * coin.price)).toFixed(2);
      if (newBalance > 0) {
        let newCount;
        let newArrCoins;

        const arr = userCoins.map(userCoin => {
          if (userCoin.id === coin.id) {
            newCount = userCoin.count + buyCount;
            return {...userCoin, count: newCount}
          }
          return userCoin
        })

        if (newCount) {
          newArrCoins = arr;
        } else {
          newArrCoins = [...userCoins, {...coin, count: buyCount}];
        }

        dispatch(buySellCoin(profile.id, newBalance, newArrCoins));
        setActive(false);
      } else {
        alert('Your balance have no money!')
      }
    }
  }

  const sellCoins = () => {
    if (profile?.balance && userCoins) {
      const newBalance = +(profile?.balance + (buyCount * coin.price)).toFixed(2);
      let newCount;

      const newArrCoins = userCoins.map((userCoin) => {
        if (userCoin.id === coin.id) {
          newCount = userCoin.count - buyCount;
          return {...userCoin, count: newCount}
        }
        return userCoin
      }).filter(userCoin => userCoin.count !== 0)

      dispatch(buySellCoin(profile.id, newBalance, newArrCoins));
      setActive(false)
      setBuyCount(1)
    }
  }

  const buySellAction = () => {
    if (buttonName === "Buy") {
      buyCoins()
    } else {
      sellCoins()
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
            <CustomButton size="16px" onClick={buySellAction}>{buttonName}</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBuySell;