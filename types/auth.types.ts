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
  admin: any;
  user: any;
  error: string;
  signInUser: (email: string, password: string) => void;
  registerUser: (email: string, password: string) => void;
  logoutUser: () => void;
  forgotPassword: (email: string) => Promise<void>;
}
