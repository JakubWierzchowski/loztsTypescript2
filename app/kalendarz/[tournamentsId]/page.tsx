'use client';
import TournamentsTable from '@/components/Calendar/Tournaments/TournamentsTable';
import React, { useState } from 'react';
import { CalendarTypeTournaments, CalendarTypeDetails, CalendarTournamentPageProps } from '@/types/calendar.type';
import styles from '@/components/Calendar/table.module.scss';
import Clock from '@/components/Calendar/Tournaments/Clock/Clock';
import AnimationClassHook from '@/utils/hooks/getAnimationClass/getAnimationClass';
import { useFetchCalendar } from '@/utils/hooks/calendar/calendarFetchHook';

export default function Tournaments({ params }: CalendarTournamentPageProps) {
  const pathTournament = params.tournamentsId;
  const [timeDone, setTimeDone] = useState<boolean>(false);

  const { title, fetchData, filteredTournaments, actualData } = useFetchCalendar(pathTournament);

  const slideInFirst = 'showAnimationDelay';
  const slideInSecond = '';
  const { ref, getShowAnimationClass } = AnimationClassHook(slideInFirst, slideInSecond);

  return (
    <>
      <div className={`${styles.titleClockAnimation} ${getShowAnimationClass()}`} ref={ref}>
        <h1 className={styles.tableTitle}>{title?.title}</h1>
        <Clock
          findTournaments={filteredTournaments}
          tournaments={pathTournament}
          timeDone={timeDone}
          setTimeDone={setTimeDone}
          fetchData={fetchData}
        />
      </div>
      {actualData.map(
        (item) =>
          item?.typeofTournaments?.map((item3: CalendarTypeTournaments) =>
            item3.table.map((item4, index) =>
              item4 === 'Wybierz kategorię' ? null : (
                <TournamentsTable
                  fetchData={fetchData}
                  pathTournament={pathTournament}
                  index={index}
                  key={item4}
                  title={item4}
                  timeDone={timeDone}
                  details={
                    (item?.players ?? []).filter(
                      (player) => player.gender === item4
                    ) as unknown as CalendarTypeDetails[]
                  }
                />
              )
            )
          )
      )}
    </>
  );
}
