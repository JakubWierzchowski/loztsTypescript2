import React, { ButtonHTMLAttributes } from 'react';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  deleteButton?: boolean;
  sendButton?: boolean;
  modalButton?: boolean;
  closeModalButton?: boolean;
  type: 'button' | 'reset' | 'submit';
}
