import React, {Dispatch, SetStateAction} from 'react';
import style from './Registration.module.scss'
import CustomInput from "../../UI/CustomInput";
import CustomButton from "../../UI/CustomButton";
import {useFormik} from "formik";
import * as Yup from "yup";

interface IRegistration {
  newEmail: string;
  newPassword: string;
  fullName: string;
  nickName: string;
  image?: string;
}

interface RegistrationProps {
  isActive: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const Registration: React.FC<RegistrationProps> = ({isActive, setActive}) => {
  const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
    initialValues: {
      newEmail: '',
      newPassword: '',
      fullName: '',
      nickName: '',
      image: ''
    },
    validationSchema: Yup.object({
      newEmail: Yup.string().email('It is must be email@email.com').required('This field is required'),
      newPassword: Yup.string().min(6, 'Password must be longest than 3 symbols').required('This field is required'),
      fullName: Yup.string().max(10, 'Full Name must be shortest than 10 symbols').required('This field is required'),
      nickName: Yup.string().max(10, 'Nickname must be shortest than 10 symbols').required('This field is required'),
      image: Yup.string().url('Enter link photo')
    }),
    onSubmit: (values: IRegistration) => {
      console.log(values)
    }
  })

  return (
    <div className={isActive ? `${style.registration} ${style.active}`: style.registration} onClick={() => setActive(false)}>
      <div className={style.registration__body} onClick={(e) => e.stopPropagation()}>
        <div className={style.registration__title}>
          <h2>Register your new account</h2>
          <p>Fast and easy :)</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={style.registration__names}>
            <CustomInput values={values.fullName}
                         handleChange={handleChange}
                         handleBlur={handleBlur}
                         id={"fullName"}
                         touched={touched.fullName}
                         errors={errors.fullName}
                         type="text"
                         placeholder="Full Name"
            />
            <CustomInput values={values.nickName}
                         handleChange={handleChange}
                         handleBlur={handleBlur}
                         id={"nickName"}
                         touched={touched.nickName}
                         errors={errors.nickName}
                         type="text"
                         placeholder="Nickname"
            />
          </div>
          <CustomInput values={values.newEmail}
                       handleChange={handleChange}
                       handleBlur={handleBlur}
                       id={"newEmail"}
                       touched={touched.newEmail}
                       errors={errors.newEmail}
                       type="text"
                       placeholder="Email"
          />
          <CustomInput values={values.newPassword}
                       handleChange={handleChange}
                       handleBlur={handleBlur}
                       id={"newPassword"}
                       touched={touched.newPassword}
                       errors={errors.newPassword}
                       type="Password"
                       placeholder="Password"
          />
          <CustomInput values={values.image}
                       handleChange={handleChange}
                       handleBlur={handleBlur}
                       id={"image"}
                       touched={touched.image}
                       errors={errors.image}
                       type="text"
                       placeholder="Add photo URL"
          />
          <div className={style.registration__createbtn}>
            <CustomButton size={"16px"}
                          green={true}
                          type="submit"
            >Create account</CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;