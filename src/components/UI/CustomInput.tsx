import React, {InputHTMLAttributes} from 'react';
import style from './CustomInput.module.scss'


export interface IValues {
  email: string;
  password: string;
}

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement>{
  values: string;
  handleChange: any;
  handleBlur: any;
  name: string;
  touched: boolean | undefined;
  errors: string | undefined;
}

const CustomInput: React.FC<CustomInputProps> = ({ values,
                                                   handleChange,
                                                   handleBlur,
                                                   name,
                                                   touched,
                                                   errors,
                                                   ...inputProps}) => {
  return (
    <>
      <div className={style.input}>
        <input
          value={values}
          onChange={handleChange}
          onBlur={handleBlur}
          id={name}
          {...inputProps}
        />
      </div>
      {touched && errors
        ? <div className={style.error}>{errors}</div>
        : null
      }
    </>
  );
};

export default CustomInput;