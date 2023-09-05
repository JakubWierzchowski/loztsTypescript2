"use client";
import { FC } from "react";
import Link from "next/link";
import styles from "@/components/Communicats/communicatsModal.module.scss";
import { DownloadDetails } from "@/types/communicats.type";
import ReactModal from "react-modal";
import { toast } from "react-toastify";

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  data: DownloadDetails[] | undefined;
  user?: { email: string } | undefined;
  deletePlayer: (id: string) => void;
}

const CommunicatsModal: FC<ModalProps> = ({
  data,
  handleClose,
  isOpen,
  user,
  deletePlayer,
}) => {
  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleClose}
        className={styles.modalWrapper}
        ariaHideApp={false}
      >
        <button className={styles.modalCloseButton} onClick={handleClose}>
          X
        </button>

        <section className={styles.wrapper}>
          {data?.length === 0 ? (
            <h2 className={styles.noResults}>
              <strong>Nie dodano jeszcze żadnych plików!</strong>
            </h2>
          ) : (
            data?.map((item, index) => (
              <div key={index} className={styles.gridItems}>
                <Link
                  className={styles.links}
                  href={`${item.link}`}
                  target="_blank"
                  download
                >
                  <div className={styles.linkItem}>
                    <span className={styles.span}>{item.fileName}</span>
                  </div>
                </Link>

                {user?.email === "lozts1937@gmail.com" ? (
                  <button
                    className={styles.deleteButton}
                    onClick={() => deletePlayer(item.id)}
                  >
                    Usuń
                  </button>
                ) : null}
              </div>
            ))
          )}
        </section>
      </ReactModal>
    </>
  );
};

export default CommunicatsModal;
