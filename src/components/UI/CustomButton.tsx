import React, {ButtonHTMLAttributes} from 'react';
import styles from './CustomButton.module.scss'

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  size: string;
  color?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
                                                     children,
                                                     size,
                                                     color,
                                                     ...props
                                                   }) => {
  let colorBtn = null;
  if (color === 'green') {
    colorBtn = styles.green;
  } else if (color === 'red') {
    colorBtn = styles.red;
  }

  return (
    <button style={{fontSize: size}} {...props} className={color
      ? `${styles.button} ${colorBtn}`
      : styles.button}>
      {children}
    </button>
  );
};

export default CustomButton;
