"use client";
import React, { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import db from "@/utils/firebase/firebase-config";
import { orderBy, query } from "firebase/firestore";
import ArticleDetails from "./ArticlesItem";
import ArticlesModal from "./ArticlesModal";
import useModal from "@/utils/hooks/useModal/useModal";
import styles from "./articles.module.scss";
import { ArticleItem } from "@/types/articles.type";
import { useUserContext } from "@/utils/context/AuthContext";

const Articles = () => {
  const { user } = useUserContext();
  const [articles, setArticles] = useState<ArticleItem[]>([]);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  useEffect(() => {
    const playerCollectionRef2 = collection(db, "articles");
    const q = query(playerCollectionRef2, orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setArticles(
        snapshot.docs.map(
          (doc) =>
            ({
              ...doc.data(),
              id: doc.id,
            } as ArticleItem)
        )
      )
    );
    return unsub;
  }, []);
  return (
    <section>
      {user?.email === "lozts1937@gmail.com" ? (
        <button onClick={handleOpenModal} className={styles.modalButton}>
          Dodaj artykuł
        </button>
      ) : null}
      <ArticlesModal isOpen={isOpen} handleClose={handleCloseModal} />
      <article className={styles.modalContentWrapper}>
        <h2 className={styles.tittleGrid}>Najnowsze artykuły</h2>
        {articles.map((item, index) => (
          <ArticleDetails
            key={index}
            item={item}
            index={index}
            user={user?.email}
          />
        ))}
      </article>
    </section>
  );
};

export default Articles;
