'use client';
import TournamentsTable from '@/components/Calendar/Tournaments/TournamentsTable';
import React, { useState } from 'react';
import { CalendarTypeTournaments, CalendarTypeDetails, CalendarTournamentPageProps } from '@/types/calendar.type';
import styles from '@/components/Calendar/table.module.scss';
import AnimationClassHook from '@/utils/hooks/getAnimationClass/getAnimationClass';
import { useFetchCalendar } from '@/utils/hooks/calendar/calendarFetchHook';
import useModal from '@/utils/hooks/useModal/useModal';
import { useUserContext } from '@/utils/context/AuthContext';
import ClockDetails from '@/components/Calendar/Tournaments/Clock/ClockDetails';
import { ModalWithButton } from '@/ui';
import IsAdmin from '@/utils/hooks/isAdmin/isAdmin';
import AddPlayersModal from '@/components/Calendar/Tournaments/AddPlayers/AddPlayersModal';
import Loading from '@/app/loading';

export default function Tournaments({ params }: CalendarTournamentPageProps) {
  const pathTournament = params.tournamentsId;
  const [timeDone, setTimeDone] = useState<boolean>(false);
  const { title, fetchData, filteredTournaments, actualData } = useFetchCalendar(pathTournament);
  const { ref, getShowAnimationClass } = AnimationClassHook('showAnimationDelay', '');

  const { handleCloseModal } = useModal();
  const [timeToMuch, settimeToMuch] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className={`${styles.titleClockAnimation} ${getShowAnimationClass()}`} ref={ref}>
        <h1 className={styles.tableTitle}>{title?.title}</h1>

        {timeDone ? (
          <h2 className={styles.clockTitle}>Czas zgłoszeń minął!</h2>
        ) : (
          <>
            <ClockDetails
              findTournaments={filteredTournaments}
              setTimeDone={setTimeDone}
              settimeToMuch={settimeToMuch}
              timeToMuch={timeToMuch}
              setLoading={(isLoading) => {
                setIsLoading(isLoading);
              }}
            />
            {/* {isLoading ? null : ( */}
            <>
              {timeToMuch ? null : (
                <>
                  <IsAdmin>
                    <ModalWithButton text={'Dodaj zawodnika'}>
                      <>
                        <AddPlayersModal
                          findTournaments={filteredTournaments}
                          tournaments={pathTournament}
                          handleClose={handleCloseModal}
                          fetchData={fetchData}
                        />
                      </>
                    </ModalWithButton>
                  </IsAdmin>
                </>
              )}
            </>
            {/* )} */}
          </>
        )}
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          {actualData.map(
            (item) =>
              item?.typeofTournaments?.map(
                (item3: CalendarTypeTournaments) =>
                  item3.table?.map((item4, index) => (
                    <TournamentsTable
                      fetchData={fetchData}
                      pathTournament={pathTournament}
                      index={index}
                      key={item4.category}
                      title={item4.category}
                      timeDone={timeDone}
                      details={
                        (item?.players ?? []).filter(
                          (player) => player.gender === item4.category
                        ) as unknown as CalendarTypeDetails[]
                      }
                    />
                  ))
              )
          )}
        </>
      )}
    </>
  );
}
