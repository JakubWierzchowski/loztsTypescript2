import React, { ReactNode } from 'react';
import styles from './underLineSpan.module.scss';

interface UnderLineProps {
  children: ReactNode;
  color: 'light' | 'dark';
}

function Span({ children, color }: UnderLineProps) {
  let colorClass = '';

  if (color === 'light') {
    colorClass = styles.light;
  } else if (color === 'dark') {
    colorClass = styles.dark;
  } else if (color === 'red') {
    colorClass = styles.red;
  }

  return <span className={`${styles.span} ${colorClass}`}>{children}</span>;
}

export { Span };
