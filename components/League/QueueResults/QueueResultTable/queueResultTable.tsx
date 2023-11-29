import React, { FC } from 'react';
import { useUserContext } from '@/utils/context/AuthContext';
import Link from 'next/link';
import styles from './queueResultTable.module.scss';
import AnimationClassHook from '@/utils/hooks/getAnimationClass/getAnimationClass';
import useHTTPrequests from '@/utils/hooks/league/httpRequest';
import { DataPropsQueueDetails } from '@/types/league.types';
import IsAdmin from '@/utils/hooks/isAdmin/isAdmin';
import { Button } from '@/ui';

const LeagueSchedules: FC<DataPropsQueueDetails> = ({ data, leaguePath }) => {
  const { deleteQueueFirebase } = useHTTPrequests();

  const slideInFirst = 'showAnimationDelay';
  const slideInSecond = 'slideOut';
  const { ref, getShowAnimationClass } = AnimationClassHook(slideInFirst, slideInSecond);

  const handleDeleteQueueFirebase = (
    id: string,
    host: string,
    guest: string,
    guestScore: number,
    hostScore: number
  ) => {
    deleteQueueFirebase(id, host, guest, guestScore, hostScore, leaguePath);
  };

  return (
    <section ref={ref} className={`${styles.resultSection} ${getShowAnimationClass()}`}>
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
            {data?.map((item, index: number) => (
              <tr key={index} className={styles.tr}>
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
                <td className={styles.td}>
                  <IsAdmin>
                    <Button
                      deleteButton
                      onClick={() =>
                        handleDeleteQueueFirebase(item.id, item.host, item.guest, item.hostScore, item.guestScore)
                      }
                      type="button"
                    >
                      Usuń kolejkę
                    </Button>
                  </IsAdmin>
                </td>
              </tr>
            ))}
          </>
        </tbody>
      </table>
    </section>
  );
};

export default LeagueSchedules;
