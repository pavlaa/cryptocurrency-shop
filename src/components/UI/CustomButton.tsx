import React from 'react';
import styles from './CustomButton.module.scss'

interface CustomButtonProps {
  onClick?: () => void;
  size: string;
  weight: string;
  color?: string
}

const CustomButton: React.FC<CustomButtonProps> = ({children, size, weight, color, ...props}) => {
  return (
    <button style={{fontSize: size, fontWeight: weight, backgroundColor: color}} {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default CustomButton;
