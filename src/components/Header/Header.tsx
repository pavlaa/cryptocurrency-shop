import React from 'react';
import style from './Header.module.scss';
import {Link} from 'react-router-dom';
import logo from '../../img/logo.svg'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {AuthActionTypes} from "../../types/authTypes";



const Header: React.FC = () => {
  const {isLogin} = useTypedSelector(state => state.auth)
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch({type: AuthActionTypes.LOGOUT})
  }

  return (
    <header className={style.header}>
      <div className={`${style.header__container} _container`}>
        <div className={ style.header__logo }>
          <Link to="/profile">
            <img src={ logo } alt={ "logo" }/>
            <p>cryptoShop</p>
          </Link>
        </div>
        <div className={ style.header__login }>
          { isLogin
            ?
            <>
              <button className={style.header__logout} onClick={ onLogout }>Logout</button>
            </>
            :
            <Link to="/login">
              <button className={style.header__logout}>Login</button>
            </Link>
          }
        </div>
      </div>
    </header>
  );
};

export default Header;