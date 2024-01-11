'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import useModal from '@/utils/hooks/useModal/useModal';
import { toastConfig } from '../toastOptions/toastOption';

import {
  signInWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from 'firebase/auth';

import { auth } from '@/utils/firebase/firebase-config';
import { UserContextType } from '@/types/auth.types';
export const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};
export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);

  const [error, setError] = useState('');

  const { handleCloseModal } = useModal();
  const admin = user?.email === process.env.NEXT_PUBLIC_ADMIN;
  const normalUser = user?.email;
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res);
      } else {
        setUser(null);
      }
      setError('');
    });
    return unsubscribe;
  }, []);

  const registerUser = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        const currentUser = auth.currentUser;
        if (currentUser) {
          return updateProfile(currentUser, {});
        }
        return null;
      })
      .then((res) => console.log(res))
      .catch((err) => setError(err.message));
  };

  const signInUser = async (email: string, password: string) => {
    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);

      if (signInMethods.length === 0) {
        console.log(signInMethods);
        toast.error('Konto z takim adresem email nie zostało zarejestrowane', toastConfig);

        return;
      }
      await signInWithEmailAndPassword(auth, email, password);
      toast.success(`Zalogowano pomyślnie ${email}!`, toastConfig);
      console.log(email);
    } catch (error: any) {
      if (error.code === 'auth/wrong-password') {
        toast.error('Błędne hasło!', toastConfig);
      } else {
        toast.error(`${error.code}`, toastConfig);
      }
    } finally {
    }
  };

  const logoutUser = () => {
    signOut(auth)
      .then(() => toast.success(`Wylogowano pomyślnie!`, toastConfig))
      .then(handleCloseModal)
      .catch(() => toast.error(`Ups.. Coś poszło nie tak. Spróbuj jeszcze raz.`, toastConfig));
  };

  const forgotPassword = async (email: string) => {
    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      if (signInMethods.length === 0) {
        toast.error('Konto z takim adresem email nie zostało zarejestrowane', toastConfig);

        return;
      }

      await sendPasswordResetEmail(auth, email);
      toast.success('Link do resetowania hasła został wysłany na Twój adres email', toastConfig);
    } catch (error) {
      console.error('Wystąpił błąd podczas resetowania hasła:', error);
    }
  };

  const contextValue: UserContextType = {
    admin,
    normalUser,
    user,
    error,
    signInUser,
    registerUser,
    logoutUser,
    forgotPassword,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
