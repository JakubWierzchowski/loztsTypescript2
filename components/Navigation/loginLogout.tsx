import React from 'react';

import { Span } from './navBar.styles';
import { LoginLogoutProps } from '@/types/navigation/navBar.types';

export function LoginLogoutSpan({ loginLogout, menuValue, color, text }: LoginLogoutProps) {
  return (
    <div className="menu-link" onClick={loginLogout}>
      <Span color={color} onClick={menuValue}>
        {text}
      </Span>
    </div>
  );
}
