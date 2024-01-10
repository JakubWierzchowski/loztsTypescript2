import { ReactNode } from 'react';

export interface ModalProps {
  children?: ReactNode;
  text?: string;
  withoutButton?: boolean;
  isOpen: boolean;
  handleClose: () => void;
  auth?: boolean;
}
