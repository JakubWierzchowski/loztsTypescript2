import React from 'react';
import { Button } from '../Button/button';
import ReactModal from 'react-modal';
import styles from './modalButton.module.scss';
import { ModalProps } from '@/types/ui/modalButton/modal.type';

function Modal({ children, isOpen, handleClose, auth }: ModalProps) {
  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleClose}
        ariaHideApp={false}
        className={auth ? styles.modalAuthWrapper : styles.modalWrapper}
      >
        <Button type={'button'} onClick={handleClose} closeModalButton>
          X
        </Button>
        <div className={styles.modalSectionWrapper}>{children}</div>
      </ReactModal>
    </>
  );
}

export { Modal };
