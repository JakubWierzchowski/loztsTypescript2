import React, { FC } from 'react';
import Link from 'next/link';
import styles from './queueResultTable.module.scss';
import AnimationClassHook from '@/utils/hooks/getAnimationClass/getAnimationClass';
import useHTTPrequestsFirebase from '@/utils/hooks/httpRequest/httpRequesFirebase';
import { DataPropsQueueDetails, QueueDetailsFirebase } from '@/types/leagues/league.types';
import IsAdmin from '@/utils/hooks/isAdmin/isAdmin';
import { Button } from '@/ui';

const LeagueSchedules: FC<DataPropsQueueDetails> = ({ data, leaguePath }) => {
  const { deleteQueueFirebase } = useHTTPrequestsFirebase<QueueDetailsFirebase>({ collectionPath: `${leaguePath}` });
  const { ref, getShowAnimationClass } = AnimationClassHook('showAnimationDelay', 'slideOut');

  const handleDeleteQueueFirebase = (id: string, index: number, queueNumber: string) => {
    deleteQueueFirebase(id, `Usunięto pozycję ${index + 1} z ${queueNumber}`);
  };

  return (
    <section ref={ref} className={`${styles.resultTable} ${getShowAnimationClass()}`}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>
              <strong>L.P</strong>
            </th>
            <th className={styles.th}>
              <strong>Gospodarze</strong>
            </th>
            <th className={styles.th}>
              <strong>Goście</strong>
            </th>
            <th colSpan={2} className={styles.th}>
              <strong>Wyniki</strong>
            </th>
            <th className={styles.th}>
              <strong>Protokół</strong>
            </th>
            <IsAdmin>
              <th className={styles.th}>
                <strong>Usuń</strong>
              </th>
            </IsAdmin>
          </tr>
        </thead>
        <tbody>
          <>
            {data?.map((item, index) => (
              <tr key={item.id} className={styles.tr}>
                <td className={styles.td}>{index + 1}</td>
                <td className={styles.td}>{item.host}</td>
                <td className={styles.td}>{item.guest}</td>
                <td className={styles.td}>{item.hostScore}</td>
                <td className={styles.td}>{item.guestScore}</td>
                <td className={styles.td}>
                  {item.img ? (
                    <Link key={item.img} href={item.img} className={styles.links} target="_blank">
                      Protokół
                    </Link>
                  ) : (
                    <div>Brak protokołu</div>
                  )}
                </td>
                <IsAdmin>
                  <td className={styles.td}>
                    <Button
                      deleteButton
                      onClick={() => handleDeleteQueueFirebase(item.id, index, item.queueNumber)}
                      type="button"
                    >
                      Usuń
                    </Button>
                  </td>
                </IsAdmin>
              </tr>
            ))}
          </>
        </tbody>
      </table>
    </section>
  );
};

export default LeagueSchedules;
