import React, { ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  deleteButton?: boolean;
  sendButton?: boolean;
  modalButton?: boolean;
  closeModalButton?: boolean;
  type: 'button' | 'reset' | 'submit';
}

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
