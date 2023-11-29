'use client';
import React from 'react';
import Link from 'next/link';
import moment from 'moment';
import { CalendarDetailsProps } from '@/types/calendar.type';
import styles from './table.module.scss';
import AnimationClassHook from '@/utils/hooks/getAnimationClass/getAnimationClass';
const CalendarDetails: React.FC<CalendarDetailsProps> = ({ details, index, month }) => {
  const myDate = moment().format('YYYY-MM-DD');
  const slideInFirst = 'slideIn';
  const slideInSecond = 'slideOut';
  const { ref, getAnimationClass } = AnimationClassHook(slideInFirst, slideInSecond);

  return (
    <>
      {details.length === 0 ? (
        <>
          <h2 className={styles.tableTitle} key={month}>
            Brak nowych wydarzeń
          </h2>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th className={styles.th}>
                  <strong>Data</strong>
                </th>
                <th className={styles.th}>
                  <strong>Nazwa</strong>
                </th>
                <th className={styles.th}>
                  <strong>Miejsce</strong>
                </th>
                <th className={styles.th}>
                  <strong>Kategoria</strong>
                </th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              <tr className={styles.td} key={'noEvents'}>
                <td colSpan={4}>Kalendarz zostanie uzupełniony przed rozpoczęciem nowego sezonu</td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <>
          <div ref={ref} className={`${styles.wrapperSection} ${getAnimationClass(index || 0)}`}>
            <h2 className={styles.tableTitle}>{month}</h2>

            <table className={styles.table}>
              <thead className={styles.thead}>
                <tr>
                  <th className={styles.th}>
                    <strong>Data</strong>
                  </th>
                  <th className={styles.th}>
                    <strong>Nazwa</strong>
                  </th>
                  <th className={styles.th}>
                    <strong>Miejsce</strong>
                  </th>
                  <th className={styles.th}>
                    <strong>Kategoria</strong>
                  </th>
                </tr>
              </thead>
              <tbody className={styles.tbody}>
                {details.map((item) => (
                  <tr className={styles.tr} key={item.title}>
                    {moment(item.datamoment).isAfter(myDate) ? (
                      <>
                        <td className={styles.td}>{item.data}</td>
                        <td className={styles.td}>
                          {!item.datamomentInvite ? (
                            <div> {item.title}</div>
                          ) : (
                            <Link href={`/kalendarz/${item.link}`} className={styles.links}>
                              <span className={styles.spanCategories}>{item.title}</span>
                            </Link>
                          )}
                        </td>
                        <td className={styles.td}>{item.place}</td>
                        <td className={styles.td}>
                          <div className={styles.categories}>
                            <div className={styles.categories}>
                              <div className={`${styles.categoryList} ${styles[item.categories]}`}>
                                {item.categories}
                              </div>
                            </div>
                          </div>
                        </td>
                      </>
                    ) : null}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default CalendarDetails;
