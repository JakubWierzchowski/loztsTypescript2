"use client";
import React, {
  FC,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { toast } from "react-toastify";
import useModal from "@/utils/hooks/useModal/useModal";

import {
  signInWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";

import { auth } from "@/utils/firebase/firebase-config";
import { UserContextType } from "@/types/auth.types";
export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};
export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { handleCloseModal } = useModal();

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res);
      } else {
        setUser(null);
      }
      setError("");
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const registerUser = (email: string, password: string) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        const currentUser = auth.currentUser;
        if (currentUser) {
          return updateProfile(currentUser, {});
        }
        return null;
      })
      .then((res) => console.log(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const signInUser = async (email: string, password: string) => {
    setLoading(true);

    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);

      if (signInMethods.length === 0) {
        console.log(signInMethods);
        toast.error("Konto z takim adresem email nie zostało zarejestrowane", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setLoading(false);
        return;
      }
      await signInWithEmailAndPassword(auth, email, password);
      toast.success(`Zalogowano pomyślnie ${email}!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(email);
    } catch (error: any) {
      if (error.code === "auth/wrong-password") {
        toast.error("Błędne hasło!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error(`${error.code}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    signOut(auth)
      .then(() =>
        toast.success(`Wylogowano pomyślnie!`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      )
      .then(handleCloseModal)
      .catch(() =>
        toast.error(`Ups.. Coś poszło nie tak. Spróbuj jeszcze raz.`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      );
  };

  const forgotPassword = async (email: string) => {
    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      if (signInMethods.length === 0) {
        toast.error("Konto z takim adresem email nie zostało zarejestrowane", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setLoading(false);
        return;
      }

      await sendPasswordResetEmail(auth, email);
      toast.success(
        "Link do resetowania hasła został wysłany na Twój adres email",
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    } catch (error) {
      console.error("Wystąpił błąd podczas resetowania hasła:", error);
    }
  };

  const contextValue: UserContextType = {
    user,
    loading,
    error,
    signInUser,
    registerUser,
    logoutUser,
    forgotPassword,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
