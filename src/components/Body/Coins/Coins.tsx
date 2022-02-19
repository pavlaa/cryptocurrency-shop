import React, {useEffect} from 'react';
import style from './Coins.module.scss';
import HeaderCoins from "./HeaderCoins";
import CoinItem from "./CoinItem";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {GetCoins} from "../../../store/actions/coinsAction";

const Coins: React.FC = () => {
  const {coins} = useTypedSelector((state) => state.coins)
  const dispatch = useDispatch()

  const coinItem = coins?.map(coin => <CoinItem key={coin.id} coin={coin} />)

  useEffect(() => {
    dispatch(GetCoins())
  })


  return (
    <div className={style.coins}>
      <div className={`${style.coins__container} _container`}>
        <HeaderCoins />
        {coinItem}
      </div>
    </div>
  );
};

export default Coins;