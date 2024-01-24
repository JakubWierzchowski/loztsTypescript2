'use client';
import React from 'react';

import ArticleDetails from './ArticlesItem';
import ArticlesModal from './ArticlesModal';
import styles from './articles.module.scss';

import useFetchArticle from '@/utils/hooks/mainPage/fetchArticle';
import { ModalWithButton } from '@/ui';
import IsAdmin from '@/utils/hooks/isAdmin/isAdmin';

const Articles = () => {
  const { articles } = useFetchArticle();

  return (
    <>
      <section>
        <article className={styles.modalContentWrapper}>
          <h2 className={styles.tittleGrid}>Najnowsze artykuły</h2>
          <IsAdmin>
            <ModalWithButton text={'Dodaj artykuł'}>
              <>
                <ArticlesModal />
              </>
            </ModalWithButton>
          </IsAdmin>
          {articles.map((item, index) => (
            <ArticleDetails key={index} item={item} index={index} />
          ))}
        </article>
      </section>
    </>
  );
};

export default Articles;
