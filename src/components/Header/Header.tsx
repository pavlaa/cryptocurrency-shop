import React, {useEffect} from 'react';
import style from './Header.module.scss';
import {Link} from 'react-router-dom';
import logo from '../../img/logo.svg';
import user from '../../img/user.svg';
import wallet from '../../img/wallet.svg';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import CustomButton from "../UI/CustomButton";
import {GetLogout, GetUser} from "../../store/actions/authAction";



const Header: React.FC = () => {
  const {isLogin, profile} = useTypedSelector(state => state.auth)
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(GetLogout())
  }

  useEffect(() => {
    const userID = localStorage.getItem('userID');
    if (!profile && userID) {
      dispatch(GetUser(userID))
    }
  }, [profile])

  return (
    <header className={style.header}>
      <div className={`${style.header__container} _container`}>
        <div className={ style.header__logo }>
          <Link to="/">
            <img src={ logo } alt={ "logo" }/>
            <p>CryptoShop</p>
          </Link>
        </div>
        {isLogin
          ?
          <div className={style.login}>
            <div className={style.login__balance}>${profile?.balance}</div>
            <div className={style.login__img}>
              {profile?.image
                ? <img src={profile?.image} alt="user-photo"/>
                : <img src={user} alt="user-photo"/>}
            </div>
            <div className={style.login__nick}>{profile?.nickName}</div>
            <div className={style.login__wallet}>
              <Link to="/wallet">
                <img src={wallet} alt="wallet"/>
              </Link>
            </div>
            <div className={style.header__btn}>
              <CustomButton size="14px" onClick={onLogout}>Log Out</CustomButton>
            </div>
          </div>
          :
          <div className={style.header__btn}>
            <Link to="/login">
              <CustomButton size="14px">Log In</CustomButton>
            </Link>
          </div>
        }
      </div>
    </header>
  );
};

export default Header;