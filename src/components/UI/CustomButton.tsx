import React, {ButtonHTMLAttributes} from 'react';
import styles from './CustomButton.module.scss'

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  size: string;
  green?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
                                                     children,
                                                     size,
                                                     green,
                                                     ...props
                                                   }) => {
  return (
    <button style={{fontSize: size}} {...props} className={green
      ? `${styles.button} ${styles.green}`
      : styles.button}>
      {children}
    </button>
  );
};

export default CustomButton;
