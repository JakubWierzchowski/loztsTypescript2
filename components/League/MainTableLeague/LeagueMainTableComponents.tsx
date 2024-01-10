import React from 'react';
import styles from './leagueMainTable.module.scss';
import AnimationClassHook from '@/utils/hooks/getAnimationClass/getAnimationClass';
import { LeagueMainTableComponentProps } from '@/types/leagues/mainTable.type';

export function LeagueMainTableComponent({ data, index, title }: LeagueMainTableComponentProps) {
  const { ref, getAnimationClass } = AnimationClassHook('slideIn', 'slideOut');

  return (
    <section ref={ref} className={`${styles.tableSection} ${getAnimationClass(index || 0)}`}>
      <div>
        <h2 className={`${styles.tableTitle} ${styles[`${title}`.split(' ').join('')]}`}>{title}</h2>

        <table className={styles.table}>
          <thead className={`${styles.thead} ${styles[`${title}`.split(' ').join('') || styles['default']]}`}>
            <tr className={styles.trHeader}>
              <th className={styles.th}>
                <strong>LP</strong>
              </th>
              <th className={styles.th}>
                <strong>Klub</strong>
              </th>
              <th className={styles.th}>
                <strong>Ilość meczy</strong>
              </th>
              <th className={styles.th}>
                <strong>Punkty</strong>
              </th>
              <th className={styles.th}>
                <strong>Gry+</strong>
              </th>
              <th className={styles.th}>
                <strong>Gry-</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((details, index) => (
              <tr key={details.team} className={styles.tr}>
                <td className={styles.td}> {index + 1}</td>
                <td className={styles.td}>{details.team}</td>
                <td className={styles.td}>{details.gamesNumber}</td>
                <td className={styles.td}>{details.pkt}</td>
                <td className={styles.td}>{details.winMatches}</td>
                <td className={styles.td}>{details.lossMatches}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
