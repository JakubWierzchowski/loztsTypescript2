import styles from './loading.module.scss';

export default function Loading() {
  return (
    <article className={styles.loadingContainer}>
      <div className={styles.bouncingBall} />
    </article>
  );
}
