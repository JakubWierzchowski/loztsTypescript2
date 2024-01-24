import React from 'react';
import Link from 'next/link';
import ArchivesData from '@/data/archives.json';
import { Archive } from '@/types/archives/archives.type';
import styles from '@/components/ArchivesLeague/archives.module.scss';

export default async function Calendar() {
  const data: Archive[] = ArchivesData.archives;
  return (
    <section className={styles.wrapper}>
      {data.map((item) => (
        <details key={item.month} className={styles.mainDiv}>
          <summary className={styles.flexItem}>{item.month}</summary>
          <div className={styles.details}>
            <div className={styles.textAnimation}>
              <div className={styles.detailsBox}>
                <Link href={`/archiwum/komunikaty/${item.month}`} className={styles.links}>
                  <span className={styles.span}>{item.komunikaty}</span>
                </Link>
                <Link href={`/archiwum/liga/${item.month}`} className={styles.links}>
                  <span className={styles.span}>{item.liga}</span>
                </Link>
                <Link href={`/archiwum/galeria/${item.month}`} className={styles.links}>
                  <span className={styles.span}>{item.galeria}</span>
                </Link>
              </div>
            </div>
          </div>
        </details>
      ))}
    </section>
  );
}
