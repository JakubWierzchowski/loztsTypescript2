'use client';
import React, { useMemo } from 'react';

import useFetchHook from '@/utils/hooks/league/usefetchHook';
import IsAdmin from '@/utils/hooks/isAdmin/isAdmin';
import useCalculateResult from '@/utils/hooks/league/useCalculateResult';
import { ModaWithButton } from '@/ui';

import { NavBarLeague, QueueSchudle, AddQueue, AddLeagueMatchday, LeagueMainTableComponent } from '@/components/League';
import { leaguePageDetails, LeagueDetail } from '@/types/leagues/league.types';

import styles from '@/components/League/leagueMain.module.scss';

export default function Liga({ params }: leaguePageDetails) {
  const pathName = params.liga;
  const { fetchData, actualData, Liga } = useFetchHook(pathName);
  const { calculateResult } = useCalculateResult();
  const leagueDetails = actualData?.leagueDetails.map(({ details }) => details).flat() || [];
  const queueDetails = actualData?.queueDetails || [];

  const sortedData = useMemo(() => {
    return calculateResult(actualData?.leagueDetails);
  }, [actualData?.leagueDetails, calculateResult]);

  return (
    <>
      <NavBarLeague leaguePath={pathName} />
      <h1 className={styles.season}>{actualData?.season}</h1>
      {sortedData?.map((item: { details: LeagueDetail[]; month: string }, index: number) => (
        <LeagueMainTableComponent data={item.details} index={index} title={item.month} key={index} />
      ))}

      <IsAdmin>
        <ModaWithButton text={'Dodaj kolejkę'}>
          <>
            <AddLeagueMatchday leaguePath={pathName} fetchData={fetchData} />
            <AddQueue leaguePath={pathName} queueDetails={queueDetails} leagueDetails={leagueDetails} />
          </>
        </ModaWithButton>
      </IsAdmin>

      <QueueSchudle leaguePath={pathName} fetchData={fetchData} findLeague={actualData} firebaseLeague={Liga} />
    </>
  );
}
