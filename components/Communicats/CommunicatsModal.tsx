"use client";
import { FC } from "react";
import Link from "next/link";
import styles from "@/components/Communicats/communicatsModal.module.scss";
import ReactModal from "react-modal";
import { CommunicatsModalProps } from "@/types/communicats.type";
import useHttpRequest from "@/utils/hooks/communicats/httpRequest";
import { useFetchCommunicats } from "@/utils/hooks/communicats/fetchData";
const CommunicatsModal: FC<CommunicatsModalProps> = ({
  data,
  handleClose,
  isOpen,
  user,
  category,
}) => {
  const { deleteCommunicat } = useHttpRequest(category);
  const { fetchData } = useFetchCommunicats();
  const handleDeleteCommunicat = (id: string) => {
    deleteCommunicat(id);
    fetchData(category);
  };

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
                    onClick={() => handleDeleteCommunicat(item.id)}
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
