import React, {InputHTMLAttributes} from 'react';
import style from './CustomInput.module.scss'


interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement>{
  values: string;
  handleChange: any;
  handleBlur: any;
  id: string;
  touched: boolean | undefined;
  errors: string | undefined;
}

const CustomInput: React.FC<CustomInputProps> = ({ values,
                                                   handleChange,
                                                   handleBlur,
                                                   id,
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
          id={id}
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