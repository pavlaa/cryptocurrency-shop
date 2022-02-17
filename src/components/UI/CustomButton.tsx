import React from 'react';
import styles from './CustomButton.module.scss'

interface CustomButtonProps {
  onClick?: () => void;
  size: string;
  green?: boolean;
  type?: 'submit'  // how type type in submit button
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
