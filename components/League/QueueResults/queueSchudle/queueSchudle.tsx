import React, { FC, useEffect, useState } from 'react';
import styles from './queueSchudle.module.scss';
import QueueResultTable from '../QueueResultTable/queueResultTable';
import AnimationClassHook from '@/utils/hooks/getAnimationClass/getAnimationClass';
import { FormValuesDataMatch, QueueResultProps } from '@/types/leagues/league.types';
import useHTTPrequest from '@/utils/hooks/httpRequest/httpRequest';
import IsAdmin from '@/utils/hooks/isAdmin/isAdmin';
import { Button } from '@/ui';
import useFetchHook from '@/utils/hooks/league/usefetchHook';

export const QueueSchudle: FC<QueueResultProps> = ({ findLeague, leaguePath, firebaseLeague, fetchData }) => {
  const { deleteRequest } = useHTTPrequest<FormValuesDataMatch>({ apiUrl: `/api/allLeague/${leaguePath}` });
  const { activeDay, viewDetails, details } = useFetchHook(leaguePath);

  const filteredData = firebaseLeague.filter((item: { queueNumber: string }) => item.queueNumber === details);

  const handleDeleteQueue = (id: string) => {
    deleteRequest(id, 'matchDay');
    fetchData();
  };

  const { ref, getShowAnimationClass } = AnimationClassHook('showAnimationDelay', 'slideOut');

  return (
    <section className={styles.details}>
      {findLeague?.queueDetails?.map((item, index) => (
        <div
          ref={ref}
          key={item.matchDay}
          className={`${styles.centerItems} ${getShowAnimationClass()}`}
          style={{ animationDelay: `${0.1 * index}s` }}
        >
          <div
            className={`${styles.matchDay} ${activeDay === item.matchDay ? styles.active : ''}`}
            onClick={() => viewDetails(item.matchDay)}
          >
            {item.matchDay}
          </div>
          <IsAdmin>
            <Button deleteButton type={'button'} onClick={() => handleDeleteQueue(item.id)}>
              Usuń kolejkę
            </Button>
          </IsAdmin>
        </div>
      ))}
      <QueueResultTable data={filteredData} leaguePath={leaguePath} />
    </section>
  );
};
