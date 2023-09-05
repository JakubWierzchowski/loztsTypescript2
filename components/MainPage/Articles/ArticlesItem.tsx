import React from "react";
import { doc, deleteDoc } from "firebase/firestore";
import db from "@/utils/firebase/firebase-config";
import styles from "./articlesItem.module.scss";
import AnimationClassHook from "@/utils/hooks/getAnimationClass/getAnimationClass";
import Image from "next/image";
import { ArticleProps } from "@/types/articles.type";

const ArticleDiv: React.FC<ArticleProps> = ({ item, index, user }) => {
  const slideInFirst = "slideIn";
  const slideInSecond = "slideOut";
  const { ref, getAnimationClass } = AnimationClassHook(
    slideInFirst,
    slideInSecond
  );

  const handleDelete = async (id: string) => {
    const docRef = doc(db, "articles", id);
    await deleteDoc(docRef);
  };

  return (
    <article className={styles.articleSection}>
      <div
        className={`${styles.gridBox} ${getAnimationClass(index)}`}
        ref={ref}
      >
        <div
          className={
            index % 2 === 0 ? styles.positionLeft : styles.positionRight
          }
        >
          <Image
            src={item.img}
            alt={item.Title}
            className={styles.image}
            fill
          />
        </div>
        <div className={styles.textStyle}>
          <h3 className={styles.title}>
            <b>{item.Title}</b>
          </h3>
          <p className={styles.text}>{item.Tekst}</p>
          <p className={styles.signatureAnimation}>
            <b>{item.Signature} </b>
          </p>
        </div>
      </div>

      {user === "lozts1937@gmail.com" ? (
        <button
          className={styles.deleteButton}
          onClick={() => handleDelete(item.id)}
        >
          Usuń artykuł
        </button>
      ) : null}
    </article>
  );
};

export default ArticleDiv;
