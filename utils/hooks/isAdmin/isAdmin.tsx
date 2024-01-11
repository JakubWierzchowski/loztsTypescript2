import React from 'react';
import { useUserContext } from '@/utils/context/AuthContext';
import { IsAdmin } from '@/types/hooks/isAdmin.type';

function IsAdmin({ children, isAdmin }: IsAdmin) {
  const { admin, normalUser } = useUserContext();

  const typeOfUser = isAdmin ? admin : normalUser;

  return <>{typeOfUser ? children : null}</>;
}

export default IsAdmin;
