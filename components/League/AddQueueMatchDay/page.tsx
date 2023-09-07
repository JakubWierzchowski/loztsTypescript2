import React, { FC } from "react";
import useModal from "@/utils/hooks/useModal/useModal";
import { useUserContext } from "@/utils/context/AuthContext";
import Modal from "./AddItemsModal/addQueueModal";
import styles from "./page.module.scss";
import { AddQueueSchudleProps } from "@/types/league.types";

const AddQueueSchudle: FC<AddQueueSchudleProps> = ({
  leaguePath,
  findLeague,
  fetchData,
}) => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { user } = useUserContext();

  const leagueDetails = findLeague?.leagueDetails
    .map(({ details }) => details)
    .flat();

  return (
    <>
      {user?.email ? (
        <button className={styles.modalButton} onClick={handleOpenModal}>
          Dodaj kolejkę
        </button>
      ) : null}

      <Modal
        isOpen={isOpen}
        handleClose={handleCloseModal}
        queueDetails={findLeague?.queueDetails}
        leagueDetails={leagueDetails}
        leaguePath={leaguePath}
        fetchData={fetchData}
      />
    </>
  );
};

export default AddQueueSchudle;
