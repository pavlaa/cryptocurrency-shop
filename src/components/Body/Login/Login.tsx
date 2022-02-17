import React from 'react';
import './Login.scss';
import CustomButton from "../../UI/CustomButton";
import {useFormik} from 'formik';
import * as Yup from 'yup'
import CustomInput, {IValues} from "../../UI/CustomInput";




const Login: React.FC = () => {
  const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().max(10, 'Email must be shorter than 10 symbols').required(),
      password: Yup.string().min(6, 'Password must be longest than 3 symbols').required(),
    }),
    onSubmit: (values: IValues) => {
      debugger
      console.log(values)
    }
  })


  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <CustomInput values={values.email}
                     handleChange={handleChange}
                     handleBlur={handleBlur}
                     name="email"
                     touched={touched.email}
                     errors={errors.email}
                     type="text"
                     placeholder="Email"
        />
        <CustomInput values={values.password}
                     handleChange={handleChange}
                     handleBlur={handleBlur}
                     name="password"
                     touched={touched.password}
                     errors={errors.password}
                     type="password"
                     placeholder="Password"
        />
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