import React from 'react';
import { Button } from '../Button/button';
import useModal from '@/utils/hooks/useModal/useModal';
import ReactModal from 'react-modal';
import styles from './modalButton.module.scss';
import { ModalButtonProps } from '@/types/ui/modalButton/modalWithButton.type';

function ModalWithButton({ children, text }: ModalButtonProps) {
  const { handleOpenModal, isOpen, handleCloseModal } = useModal();

  return (
    <>
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
    </>
  );
}

export { ModalWithButton };
