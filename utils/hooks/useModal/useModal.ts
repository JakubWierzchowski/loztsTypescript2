'use client';
import { useState } from 'react';

const useModal = (initialstate = false) => {
  const [isOpen, setModalState] = useState(initialstate);
  const handleOpenModal = () => setModalState(true);
  const handleCloseModal = () => setModalState(false);
  return {
    isOpen,
    handleOpenModal,
    handleCloseModal,
  };
};

export default useModal;
