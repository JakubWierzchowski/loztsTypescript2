'use client';
import React, { FC, useState } from 'react';
import Signin from './SingIn';
import ForgotPassword from './FotgotPassword';
import styles from './auth.module.scss';
import { ClockProps } from '@/types/auth.types';
import { Modal } from '@/ui';
const Auth: FC<ClockProps> = ({ handleClose, isOpen }) => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <Modal isOpen={isOpen} handleClose={handleClose} auth>
      {!index ? (
        <>
          <Signin />
        </>
      ) : (
        <ForgotPassword />
      )}
      <div onClick={toggleIndex}>
        {!index ? (
          <p className={styles.logorForgetPass}>Nie pamiętasz hasła?</p>
        ) : (
          <p className={styles.logorForgetPass}>Zaloguj się</p>
        )}
      </div>
    </Modal>
  );
};

export default Auth;
