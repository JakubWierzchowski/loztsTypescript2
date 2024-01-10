import React from 'react';
import { doc, deleteDoc } from 'firebase/firestore';
import db from '@/utils/firebase/firebase-config';
import styles from './articlesItem.module.scss';
import AnimationClassHook from '@/utils/hooks/getAnimationClass/getAnimationClass';
import Image from 'next/image';
import { ArticleProps } from '@/types/mainPage/articles.type';
import { Button } from '@/ui/Button/button';
import IsAdmin from '@/utils/hooks/isAdmin/isAdmin';

const ArticleDiv: React.FC<ArticleProps> = ({ item, index }) => {
  const { ref, getAnimationClass } = AnimationClassHook('slideIn', 'slideOut');

  const handleDelete = async (id: string) => {
    const docRef = doc(db, 'articles', id);
    await deleteDoc(docRef);
  };

  return (
    <article className={styles.articleSection}>
      <div className={`${styles.gridBox} ${getAnimationClass(index)}`} ref={ref}>
        <div className={index % 2 === 0 ? styles.positionLeft : styles.positionRight}>
          <Image src={item.img} alt={item.Title} className={styles.image} fill sizes="75vw" />
        </div>
        <div className={styles.textStyle}>
          <h3 className={styles.title}>
            <b>{item.Title}</b>
          </h3>
          <p className={styles.text}>{item.Tekst}</p>
          <p className={styles.signature}>
            <b>{item.Signature} </b>
          </p>
          <IsAdmin>
            <div>
              <Button type="button" deleteButton onClick={() => handleDelete(item.id)}>
                Usuń artykuł
              </Button>
            </div>
          </IsAdmin>
        </div>
      </div>
    </article>
  );
};

export default ArticleDiv;
