"use client";
import useModal from "@/utils/hooks/useModal/useModal";
import Image from "next/image";
import styles from "./newsList.module.scss";
import Modal from "./NewListModal";
import { useUserContext } from "@/utils/context/AuthContext";
import Logo from "../../../public/images/header/logo.png";
import { useFetch } from "@/utils/hooks/mainPage/fetchDataHook";
import useDeleteArtykul from "@/utils/hooks/mainPage/httpRequestNewList";

function NewsList() {
  const { user } = useUserContext();
  const { deleteArtykul } = useDeleteArtykul();
  const { newArticle, currentInfo, fetchData, handleOpenInfo } = useFetch();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const handleDeleteArtykul = (id: string) => {
    deleteArtykul(id);
    fetchData();
  };

  return (
    <>
      <section className={styles.wrapperArticle}>
        <div className={styles.gridLayout}>
          <div className={styles.articleHeader}>
            <h3>Aktualności</h3>
          </div>
          <div className="buttonSpace">
            {user?.email === "lozts1937@gmail.com" ? (
              <>
                <button
                  type="button"
                  className={styles.modalButton}
                  onClick={handleOpenModal}
                >
                  Dodaj informację
                </button>

                <Modal
                  isOpen={isOpen}
                  handleClose={handleCloseModal}
                  fetchData={fetchData}
                />
              </>
            ) : null}
          </div>
          <div className={styles.articleShortGrid}>
            <div className={styles.articleShortSection}>
              {newArticle.map((item, index) => (
                <div
                  key={index}
                  className={styles.shortsItem}
                  onClick={() => handleOpenInfo(item)}
                >
                  <div className={styles.itemShortTitle}>{item.title}</div>
                  <div className={styles.itemShortData}>{item.timeadd}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.articleContentGrid}>
            <div className={styles.articleContent}>
              <div className={styles.articleHeader}>
                <Image
                  src={Logo}
                  height={100}
                  width={100}
                  alt="logo"
                  priority
                />
                <div className={styles.articleData}>{currentInfo?.timeadd}</div>
              </div>
              <div className={styles.articleTitle}>{currentInfo?.title}</div>
              <div className={styles.articleText}>{currentInfo?.text}</div>
              <div className={styles.articleSignature}>
                {currentInfo?.signature}
              </div>
              <div className={styles.centerButton}>
                {user?.email === "lozts1937@gmail.com" ? (
                  <button
                    className={styles.deleteButton}
                    type="button"
                    onClick={() => handleDeleteArtykul(currentInfo.id)}
                  >
                    Usuń informację
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsList;
