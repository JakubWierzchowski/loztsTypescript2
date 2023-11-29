'use client';
import React, { ReactNode, useContext } from 'react';
import { useUserContext } from '@/utils/context/AuthContext';
interface IsAdmin {
  children: ReactNode;
}

function IsAdmin({ children }: IsAdmin) {
  const { admin } = useUserContext();

  return <>{admin ? children : null}</>;
}

export default IsAdmin;
