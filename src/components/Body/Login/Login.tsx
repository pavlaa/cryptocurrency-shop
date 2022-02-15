import React from 'react';
import './Login.scss'
import CustomButton from "../../UI/CustomButton";

const Login: React.FC = () => {
  return (
    <div className="login">
      <div className="login__input">
        <input type="text" name="login" placeholder="Login"/>
      </div>
      <div className="login__input">
        <input type="password" name="login" placeholder="Password"/>
      </div>
      <div className="login__login-btn">
        <CustomButton size={"18px"} weight={"700"}>Log In</CustomButton>
      </div>
      <div className="login__create-btn">
        <CustomButton size={"16px"} weight={"700"} color={"#42B72A"}>Create account</CustomButton>
      </div>
    </div>
  );
};

export default Login;