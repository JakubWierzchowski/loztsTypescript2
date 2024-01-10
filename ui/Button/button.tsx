import React from 'react';
import styles from './button.module.scss';
import { ButtonProps } from '@/types/ui/button/button.type';

const Button: React.FC<ButtonProps> = ({ deleteButton, sendButton, modalButton, closeModalButton, type, ...props }) => {
  let className = '';

  if (deleteButton) {
    className = styles.deleteButton;
  } else if (sendButton) {
    className = styles.sendButton;
  } else if (modalButton) {
    className = styles.modalButton;
  } else if (closeModalButton) {
    className = styles.closeModalButton;
  }

  return <button className={className} {...props} type={type} />;
};

export { Button };
