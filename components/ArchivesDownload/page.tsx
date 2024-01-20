'use client';
import React from 'react';
import Link from 'next/link';
import { DownloadDetailsProps } from '@/types/archives/archivesDownload.type';
import styles from './archivesDwonload.module.scss';
import AnimationClassHook from '@/utils/hooks/getAnimationClass/getAnimationClass';

const Komunikaty: React.FC<DownloadDetailsProps> = ({ category, details, index }) => {
  const { ref, getAnimationClass } = AnimationClassHook('slideIn', 'slideOut');
  return (
    <section ref={ref} className={`${styles.wrapper} ${getAnimationClass(index || 0)}`}>
      <h2 className={styles.tableTitle}>{category}</h2>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>
              <strong>L.P</strong>
            </th>
            <th className={styles.th}>
              <strong>Nazwa </strong>
            </th>
            <th className={styles.th}>
              <strong>Download</strong>
            </th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {details.map((item, index) => (
            <tr className={styles.tr} key={item.title}>
              <td className={styles.td}>{index + 1}</td>
              <td className={styles.td}>{item.title}</td>
              <td className={styles.td}>
                <Link key={index} className={styles.links} href={`${item.download}`} target="_blank" download>
                  <span className={styles.span}>Download</span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Komunikaty;
