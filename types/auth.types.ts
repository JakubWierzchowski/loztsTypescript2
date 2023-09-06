export interface ClockProps {
  isOpen: boolean;
  handleClose: () => void;
}

export type FormDataForgotPassword = {
  email: string;
};

export type FormDataSingIn = {
  email: string;
  password: string;
};

export interface UserContextType {
  user: any; // Tutaj możesz dostosować typ na podstawie danych użytkownika z Firebase
  error: string;
  signInUser: (email: string, password: string) => void;
  registerUser: (email: string, password: string) => void;
  logoutUser: () => void;
  forgotPassword: (email: string) => Promise<void>;
}
