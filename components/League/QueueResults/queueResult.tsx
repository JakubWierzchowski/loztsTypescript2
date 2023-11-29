import React, { FC, useEffect, useState } from 'react';
import styles from './queueResult.module.scss';
import { useUserContext } from '@/utils/context/AuthContext';
import QueueResultTable from './QueueResultTable/queueResultTable';
import AnimationClassHook from '@/utils/hooks/getAnimationClass/getAnimationClass';
import { FormValuesDataMatch, QueueResultProps } from '@/types/league.types';
import useHTTPrequest from '@/utils/hooks/httpRequest/httpRequest';

const QueueSchudle: FC<QueueResultProps> = ({ findLeague, leaguePath, firebaseLeague, fetchData }) => {
  const { deleteRequest } = useHTTPrequest<FormValuesDataMatch>({ apiUrl: `/api/allLeague/${leaguePath}` });
  const { user } = useUserContext();
  const sortDate = findLeague?.queueDetails.sort((a, b) => (a.day > b.day ? -1 : 0));

  const [details, setDetails] = useState('');
  const [activeDay, setActiveDay] = useState('');

  useEffect(() => {
    if (sortDate && sortDate.length > 1) {
      const firstSortDateItem = sortDate[1]?.matchDay || '';
      setDetails(firstSortDateItem);
      setActiveDay(firstSortDateItem);
    }
  }, [sortDate]);

  const viewDetails = (i: string) => {
    setDetails(i);
    setActiveDay(i);
  };

  const filteredData = firebaseLeague.filter((item: any) => item.queueNumber === details);

  const handleDeleteQueue = (id: string, leaguePath: string) => {
    deleteRequest(id, 'matchDay');
    fetchData();
  };

  const slideInFirst = 'showAnimationDelay';
  const slideInSecond = 'slideOut';
  const { ref, getShowAnimationClass } = AnimationClassHook(slideInFirst, slideInSecond);
  return (
    <section className={styles.details}>
      {sortDate?.map((item, index) => (
        <div
          ref={ref}
          key={index}
          className={`${styles.centerItems} ${getShowAnimationClass()}`}
          style={{ animationDelay: `${0.1 * index}s` }}
        >
          <div
            className={`${styles.matchDay} ${activeDay === item.matchDay ? styles.active : ''}`}
            onClick={() => viewDetails(item.matchDay)}
          >
            {item.matchDay}
          </div>
          {user?.email === 'lozts1937@gmail.com' ? (
            <button
              className={styles.deleteButton}
              key={item.id}
              onClick={() => handleDeleteQueue(item.id, leaguePath)}
            >
              Usuń kolejkę
            </button>
          ) : null}
        </div>
      ))}
      <QueueResultTable data={filteredData} leaguePath={leaguePath} />
    </section>
  );
};

export default QueueSchudle;
