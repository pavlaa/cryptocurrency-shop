import React from 'react';
import './Login.scss';
import CustomButton from "../../UI/CustomButton";
import {useFormik} from 'formik';
import * as Yup from 'yup'


const Login: React.FC = () => {
  const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
    initialValues: {
      login: '',
      password: ''
    },
    validationSchema: Yup.object({
      login: Yup.string().max(10, 'Login must be shorter than 10 symbols').required(),
      password: Yup.string().min(6, 'Password must be longest than 3 symbols').required(),
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })


  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="login__input">
          <input
            value={values.login}
            onChange={handleChange}
            onBlur={handleBlur}
            id="login"
            name="login"
            type="text"
            placeholder="Login"
          />
        </div>
        {touched.login && errors.login ? <div className="login__error">{errors.login}</div> : null}
        <div className="login__input">
          <input
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>
        {touched.password && errors.password ? <div className="login__error">{errors.password}</div> : null}
        <div className="login__login-btn">
          <CustomButton size={"18px"} weight={"700"} type="submit">Log In</CustomButton>
        </div>
        <div className="login__create-btn">
          <CustomButton size={"16px"} weight={"700"} color={"#42B72A"}>Create account</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default Login;