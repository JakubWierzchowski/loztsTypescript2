import React, { ReactNode } from 'react';
import { useUserContext } from '@/utils/context/AuthContext';
import { IsAdmin } from '@/types/hooks/isAdmin.type';

function IsAdmin({ children }: IsAdmin) {
  const { admin } = useUserContext();

  return <>{admin ? children : null}</>;
}

export default IsAdmin;
