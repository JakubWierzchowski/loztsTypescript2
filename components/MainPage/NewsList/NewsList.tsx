"use client";
import { useState, useEffect } from "react";
import useModal from "@/utils/hooks/useModal/useModal";
import Image from "next/image";
import { toast } from "react-toastify";
import newArticleData from "@/data/article.json";
import { Article } from "@/types/article.type";
import styles from "./newsList.module.scss";
import Modal from "./NewListModal";
import { useUserContext } from "@/utils/context/AuthContext";
import Logo from "../../../public/images/header/logo.png";

function NewsList() {
  const data: Article[] = newArticleData;
  const { user } = useUserContext();
  const [newArticle, setNewArticle] = useState<Article[]>(data);
  const [currentInfo, setCurrentInfo] = useState<Article>({} as Article);

  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const handleOpenInfo = (item: Article) => {
    setCurrentInfo(item);
  };

  async function fetchData() {
    try {
      const response = await fetch(`/api/newList`);
      const data = await response.json();

      const sortedData = [...data].sort((a, b) =>
        a.sortDate > b.sortDate ? -1 : 0
      );

      setNewArticle(sortedData);
      setCurrentInfo(sortedData[0]);
    } catch (error) {
      console.error("Wystąpił błąd z pobieraniem danych", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function deleteArtykul(id: string) {
    try {
      await fetch(`/api/newList/${id}`, {
        method: "DELETE",
      });
      fetchData();
      toast.success(`Usunięto artykuł - ${currentInfo.title}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.error(`Wystąpił błąd podczas usuwania artykułu: - ${error}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

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
                    onClick={() => deleteArtykul(currentInfo.id)}
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
