import React from 'react';
import styles from './underLineSpan.module.scss';
import { UnderLineProps } from '@/types/ui/underlineSpan/underlineSpan.type';

function Span({ children, color, click, className }: UnderLineProps) {
  let colorClass = '';

  if (color === 'light') {
    colorClass = styles.light;
  } else if (color === 'dark') {
    colorClass = styles.dark;
  }

  const spanClasses = `${styles.span} ${colorClass} ${className || ''}`;

  return (
    <span className={spanClasses} onClick={click}>
      {children}
    </span>
  );
}

export { Span };
