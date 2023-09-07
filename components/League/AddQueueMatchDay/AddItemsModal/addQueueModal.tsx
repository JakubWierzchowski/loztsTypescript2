import React, { FC } from "react";
import styles from "./addQueueModal.module.scss";
import ReactModal from "react-modal";
import { AddQueueModalProps } from "@/types/league.types";
import AddLeagueMatchday from "./AddMatchDay/page";
import AddQueue from "./AddQueue/addQueue";

const Modal: FC<AddQueueModalProps> = ({
  handleClose,
  isOpen,
  queueDetails,
  leagueDetails,
  leaguePath,
  fetchData,
}) => {
  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleClose}
        ariaHideApp={false}
        className={styles.modalWrapper}
      >
        <button className={styles.modalCloseButton} onClick={handleClose}>
          X
        </button>
        <section className={styles.wrapper}>
          <AddLeagueMatchday leaguePath={leaguePath} fetchData={fetchData} />
          <AddQueue
            leaguePath={leaguePath}
            queueDetails={queueDetails}
            leagueDetails={leagueDetails}
            handleClose={handleClose}
          />
        </section>
      </ReactModal>
    </>
  );
};

export default Modal;
