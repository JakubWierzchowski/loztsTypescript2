import { ReactNode } from 'react';

export interface UnderLineProps {
  children: ReactNode;
  color: string;
  click?: () => void;
  className?: string;
}
