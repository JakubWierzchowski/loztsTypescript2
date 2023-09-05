// "use client";
// import { createContext, useContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";

// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
//   updateProfile,
//   sendPasswordResetEmail,
//   User as FirebaseUser,
// } from "firebase/auth";
// import { auth } from "@/utils/firebase/firebase-config";

// interface UserContextType {
//   user: FirebaseUser | null;
//   loading: boolean;
//   error: string;
//   signInUser: (email: string, password: string) => void;
//   registerUser: (email: string, password: string) => void;
//   logoutUser: () => void;
//   forgotPassword: (email: string) => Promise<void>;
// }

// export const UserContext = createContext<UserContextType | undefined>(
//   undefined
// );
// //
// export const useUserContext = (): UserContextType => {
//   const context = useContext(UserContext);
//   if (!context) {
//     throw new Error("useUserContext must be used within a UserContextProvider");
//   }
//   return context;
// };

// export const UserContextProvider: React.FC = ({ children }) => {
//   const [user, setUser] = useState<FirebaseUser | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string>("");

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (res) => {
//       if (res) {
//         setUser(res);
//       } else {
//         setUser(null);
//       }
//       setError("");
//       setLoading(false);
//     });
//     return unsubscribe;
//   }, []);

//   const registerUser = (email: string, password: string) => {
//     setLoading(true);
//     createUserWithEmailAndPassword(auth, email, password)
//       .then(() => updateProfile(auth.currentUser as FirebaseUser, {}))
//       .then((res) => console.log(res))
//       .catch((err) => setError(err.message))
//       .finally(() => setLoading(false));
//   };

//   const signInUser = (email: string, password: string) => {
//     setLoading(true);
//     signInWithEmailAndPassword(auth, email, password)
//       .then((res) =>
//         toast.success(`Zalogowano pomyślnie ${res.user?.email}!`, {
//           position: "top-right",
//           autoClose: 2000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         })
//       )
//       .catch((err) => setError(err.code))
//       .finally(() => setLoading(false));
//   };

//   const logoutUser = () => {
//     signOut(auth)
//       .then(() => {
//         toast.success(`Wylogowano pomyślnie!`, {
//           position: "top-right",
//           autoClose: 2000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//       })
//       .catch((err) => {
//         toast.error(`Ups.. Coś poszło nie tak. Spróbuj jeszcze raz.`, {
//           position: "top-right",
//           autoClose: 2000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//       });
//   };

//   const forgotPassword = (email: string) => {
//     return sendPasswordResetEmail(auth, email);
//   };

//   const contextValue: UserContextType = {
//     user,
//     loading,
//     error,
//     signInUser,
//     registerUser,
//     logoutUser,
//     forgotPassword,
//   };
//   return (
//     <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
//   );
// };

// // export const useGlobalContext = () => useContext(UserContext);

// //   ${({ theme }) => theme.mq.tablet} {
// //     .mainDiv {
// //       .flexItem {
// //         font-size: 5rem;
// //         &:after {
// //           left: 30px;
// //         }
// //       }
// //     }
// //   }
// //   ${({ theme }) => theme.mq.desktop} {
// //     .mainDiv {
// //       .flexItem {
// //         font-size: 6rem;
// //         &:after {
// //           left: 20px;
// //         }
// //       }
// //     }
// //   }
// //   ${({ theme }) => theme.mq.bigDesktop} {
// //     .mainDiv {
// //       .flexItem {
// //         font-size: 6.5rem;
// //       }
// //     }
// //   }

// //   ${({ theme }) => theme.mq.tablet} {
// //     font-size: 2.4rem;
// //   }
// //   ${({ theme }) => theme.mq.desktop} {
// //     font-size: 3rem;
// //   }
// //   ${({ theme }) => theme.mq.bigDesktop} {
// //     font-size: 3.6rem;
// //   }
