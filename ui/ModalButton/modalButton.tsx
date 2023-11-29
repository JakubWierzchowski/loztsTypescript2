import React, { ReactNode } from 'react';
import { Button } from '../Button/button';
import useModal from '@/utils/hooks/useModal/useModal';
import IsAdmin from '@/utils/hooks/isAdmin/isAdmin';
import ReactModal from 'react-modal';
import styles from './modalButton.module.scss';

interface ModalButtonProps {
  children?: ReactNode;
  text: string;
}

function ModaWithButton({ children, text }: ModalButtonProps) {
  const { handleOpenModal, isOpen, handleCloseModal } = useModal();

  return (
    <IsAdmin>
      <div className={styles.centerModalButton}>
        <Button modalButton onClick={handleOpenModal} type="button">
          {text}
        </Button>
      </div>
      <ReactModal isOpen={isOpen} onRequestClose={handleCloseModal} ariaHideApp={false} className={styles.modalWrapper}>
        <Button type={'button'} onClick={handleCloseModal} closeModalButton>
          X
        </Button>
        <div className={styles.modalSectionWrapper}>
          {React.cloneElement(children as React.ReactElement, { handleCloseModal })}
        </div>
      </ReactModal>
    </IsAdmin>
  );
}

export { ModaWithButton };
