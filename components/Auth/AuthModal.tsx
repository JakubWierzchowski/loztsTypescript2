"use client";
import React, { FC, useState } from "react";
import Signin from "./SingIn";
import ForgotPassword from "./FotgotPassword";
import ReactModal from "react-modal";
import styles from "./auth.module.scss";
import { ClockProps } from "@/types/auth.types";
const Auth: FC<ClockProps> = ({ handleClose, isOpen }) => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleClose}
      ariaHideApp={false}
      className={styles.modalAuth}
    >
      <button className={styles.modalCloseButton} onClick={handleClose}>
        X
      </button>
      {!index ? <Signin /> : <ForgotPassword />}
      <div onClick={toggleIndex}>
        {!index ? (
          <p className={styles.logorForgetPass}>Nie pamiętasz hasła?</p>
        ) : (
          <p className={styles.logorForgetPass}>Zaloguj się</p>
        )}
      </div>
    </ReactModal>
  );
};

export default Auth;
