import React, {useState} from 'react';
import './Login.scss';
import CustomButton from "../../UI/CustomButton";
import {useFormik} from 'formik';
import * as Yup from 'yup'
import CustomInput from "../../UI/CustomInput";
import Registration from "./Registration";
import {useDispatch} from "react-redux";
import {GetLogin} from "../../../store/actions/authAction";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {Navigate} from "react-router-dom"

interface IValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {isLogin} = useTypedSelector(state => state.auth)
  const [isActive, setActive] = useState(false)
  const dispatch = useDispatch()

  const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('It is must be email@email.com').required('This field is required'),
      password: Yup.string().min(6, 'Password must be longest than 3 symbols').required('This field is required'),
    }),
    onSubmit: (values: IValues) => {
      dispatch(GetLogin(values))
    }
  })

  if (isLogin) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <div className="login _container">
        <form onSubmit={handleSubmit}>
          <CustomInput values={values.email}
                       handleChange={handleChange}
                       handleBlur={handleBlur}
                       id={"email"}
                       touched={touched.email}
                       errors={errors.email}
                       type="text"
                       placeholder="Email"
          />
          <CustomInput values={values.password}
                       handleChange={handleChange}
                       handleBlur={handleBlur}
                       id={"password"}
                       touched={touched.password}
                       errors={errors.password}
                       type="password"
                       placeholder="Password"
          />
          <div className="login__login-btn">
            <CustomButton size={"18px"}  type="submit">Log In</CustomButton>
          </div>
        </form>
        <div className="login__create-btn">
          <CustomButton size="16px" color="green" onClick={() => setActive(true)}>Create account</CustomButton>
        </div>
      </div>
      <div className="info _container">
        <p>
          If you want to enter, and check how my app works
          Just write:
        </p>
        <p>email: unknown@gmail.com</p>
        <p>password: 123456</p>
      </div>
      <Registration isActive={isActive} setActive={setActive} />
    </>
  );
};

export default Login;