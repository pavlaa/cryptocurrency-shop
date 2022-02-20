import React, {useState} from 'react';
import style from "./HeaderCoins.module.scss";
import CustomButton from "../../UI/CustomButton";
import {useDispatch} from "react-redux";
import {SearchCoin} from "../../../store/actions/coinsAction";


interface HeaderCoins {
  title: string;
}

const HeaderCoins: React.FC<HeaderCoins> = ({title}) => {
  const [name, getName] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    getName(e.target.value)
  }

  const searchCoin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(SearchCoin(name));
    getName('')
  }

  return (
    <div className={style.coins__header}>
      <div className={style.coins__title}>
        {title}
      </div>
      <div className={style.coins__search}>
        <div className={style.coins__searchbtn}>
          <CustomButton size={"16px"} onClick={searchCoin}>Search</CustomButton>
        </div>
        <div className={style.coins__searcinput}>
          <input value={name} onChange={handleChange} type="text" placeholder="Search..."/>
        </div>
      </div>
    </div>
  );
};

export default HeaderCoins;