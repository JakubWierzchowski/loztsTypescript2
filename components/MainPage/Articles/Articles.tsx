'use client';
import React from 'react';

import ArticleDetails from './ArticlesItem';
import ArticlesModal from './ArticlesModal';
import styles from './articles.module.scss';

import useFetchArticle from '@/utils/hooks/mainPage/fetchArticle';
import { ModaWithButton } from '@/ui/ModalButton/modalButton';

const Articles = () => {
  const { articles } = useFetchArticle();

  return (
    <section>
      <article className={styles.modalContentWrapper}>
        <h2 className={styles.tittleGrid}>Najnowsze artykuły</h2>

        <ModaWithButton text={'Dodaj artykuł'}>
          <ArticlesModal />
        </ModaWithButton>

        {articles.map((item, index) => (
          <ArticleDetails key={index} item={item} index={index} />
        ))}
      </article>
    </section>
  );
};

export default Articles;
